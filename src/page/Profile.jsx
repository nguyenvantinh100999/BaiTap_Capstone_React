import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileActionAsync,
  getUpdateProfileActionAsync,
} from "../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { setOrderAction } from "../redux/reducers/orderReducer";
import moment from "moment";
import { useFormik } from "formik";
const Profile = () => {
  const { profile } = useSelector((state) => state.userReducer);
  const { order } = useSelector((state) => state.orderReducer);
  const formUser = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      name: "",
    },
    onSubmit: (values) => {
      const actionPayload = getUpdateProfileActionAsync(values);
      dispatch(actionPayload);
      console.log(values);
    },
  });
  console.log(profile);
  console.log(order);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const getProfileApi = () => {
  //   const actionThunk = getProfileActionAsync();
  //   dispatch(actionThunk);
  //   const actionPayload = setOrderAction(profile.ordersHistory);
  //   dispatch(actionPayload);
  // };
  // Lấy thông tin profile
  const getProfileApi = async () => {
    await dispatch(getProfileActionAsync());
  };
  useEffect(() => {
    getProfileApi();
  }, [dispatch]);

  // Thiết lập lịch sử đơn hàng khi profile đã được cập nhật
  const setOrderHistory = () => {
    if (profile && profile.ordersHistory) {
      const actionPayload = setOrderAction(profile.ordersHistory);
      dispatch(actionPayload);
    }
  };
  useEffect(() => {
    setOrderHistory();
  }, [dispatch, profile]); // Chỉ phụ thuộc vào profile

  const colums = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (value) => moment(value).format("DD/MM/YYYY HH:mm:ss"),
    },
    {
      title: "Status",
      // dataIndex: "status",
      render: (value, record) => {
        if (record.status === null) {
          return "CHUAGIAO";
        }
        return "DAGIAO";
      },
    },
  ];
  const expandedRowRender = (record) => {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Toltal</th>
            </tr>
          </thead>
          <tbody>
            {record.orderDetail.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt="..." width={50} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.price * item.quantity).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };
  return (
    <div className="container">
      <h3 className="text-center">Profile</h3>
      <div className="d-flex justify-content-between">
        <div className="w-30 me-5">
          <img
            src={profile.avatar}
            alt="..."
            className="rounded-circle"
            width={200}
          />
        </div>
        <div className="w-100">
          <form className="d-flex" onSubmit={formUser.handleSubmit}>
            <div className="w-50">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="input enter email"
                  className="form-control w-75"
                  onChange={formUser.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="input enter phone"
                  className="form-control w-75"
                  onChange={formUser.handleChange}
                />
              </div>
            </div>
            <div className="w-50">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="input enter name"
                  className="form-control w-75"
                  onChange={formUser.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="input enter password"
                  className="form-control w-75"
                  onChange={formUser.handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="gander" className="me-4">
                  Gender
                </label>
                <input
                  className="form-check-input mt-2"
                  type="radio"
                  name="gender"
                  id="male"
                  value={true}
                />
                <label
                  className="form-check-label me-2"
                  htmlFor="flexRadioDefault1"
                >
                  Male
                </label>
                <input
                  className="form-check-input mt-2"
                  type="radio"
                  name="gender"
                  id="female"
                  value={false}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
                <button
                  className="btn btn-success ms-4"
                  onClick={() => {
                    formUser.handleSubmit;
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <h3>Order history</h3>

      <Table
        rowKey={"id"}
        dataSource={order}
        columns={colums}
        expandable={{
          expandedRowRender,
          rowExpandable: (record) => true,
        }}
      />
    </div>
  );
};

export default Profile;
