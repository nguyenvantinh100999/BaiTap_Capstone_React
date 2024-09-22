import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  changeQuantityProductAction,
  deleteProductAction,
  orderProductAction,
} from "../redux/reducers/cartReducer";
import { http } from "../util/setting";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.userReducer);
  const cartStore = useSelector((state) => state.cartReducer.cart);
  const { profile } = useSelector((state) => state.userReducer);
  console.log(userLogin);
  // Check if the user is logged in
  const isLoggedIn = () => {
    return !!profile.email; // Assuming profile.email indicates login status
  };

  // Redirect if the user is not logged in
  useEffect(() => {
    if (!isLoggedIn()) {
      alert("Vui lòng đăng nhập");
      navigate("/login"); // Navigate to login page
    }
  }, [navigate, isLoggedIn]); // Depend on navigate and isLoggedIn

  const createOrderDetail = () => {
    return cartStore.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));
  };
  const colums = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (value, record) => {
        return (
          <NavLink to={`/detail/${record.id}`}>
            <img
              src={record.image}
              width={50}
              alt="..."
              style={{ cursor: "pointer" }}
            />
          </NavLink>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (value, record) => {
        return (
          <>
            <button
              className="btn btn-primary"
              onClick={() => {
                const payload = {
                  id: record.id,
                  quantity: 1,
                };
                const action = changeQuantityProductAction(payload);
                dispatch(action);
              }}
            >
              +
            </button>
            {value}
            <button
              className="btn btn-primary"
              onClick={() => {
                const payload = {
                  id: record.id,
                  quantity: -1,
                };
                const action = changeQuantityProductAction(payload);
                dispatch(action);
              }}
            >
              -
            </button>
          </>
        );
      },
    },
    {
      title: "Toltal",
      render: (value, record) => {
        return (record.price * record.quantity).toLocaleString();
      },
    },
    {
      title: "Action",
      render: (value, record) => {
        return (
          <button
            className="btn btn-danger"
            onClick={() => {
              const action = deleteProductAction(record.id);
              dispatch(action);
            }}
          >
            <i className="fa fa-close"></i>
          </button>
        );
      },
    },
  ];
  return (
    <div className="container">
      <h3 className="text-center">Cart</h3>
      <div className="text-end">
        <Table rowKey={"id"} dataSource={cartStore} columns={colums} />
        <button
          className="btn btn-info"
          onClick={() => {
            const payload = {
              orderDetail: createOrderDetail(),
              email: profile.email,
            };
            const action = orderProductAction(payload);
            console.log(payload);
            dispatch(action);
          }}
        >
          SUBMIT ORDER
        </button>
      </div>
    </div>
  );
};

export default Cart;
