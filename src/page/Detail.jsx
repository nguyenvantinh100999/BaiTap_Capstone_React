import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantityDetailAction,
  getProductDetailApiActionThunk,
} from "../redux/reducers/productReducer";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { addProductAction } from "../redux/reducers/cartReducer";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { arrProductDetail } = useSelector((state) => state.productReducer);
  const param = useParams();
  console.log(arrProductDetail);
  const getArrProductDetail = () => {
    const actionThunk = getProductDetailApiActionThunk(param.prodId);
    dispatch(actionThunk);
  };
  useEffect(() => {
    getArrProductDetail();
  }, [param.prodId]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={arrProductDetail.image} className="w-100" alt="..." />
        </div>
        <div className="col-8">
          <h3>{arrProductDetail.name}</h3>
          <p>{arrProductDetail.description}</p>
          <div className="d-block mb-4">
            {arrProductDetail.size?.map((size) => {
              return (
                <button className="btn btn-danger me-2" key={size}>
                  {size}
                </button>
              );
            })}
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              const payload = {
                id: arrProductDetail.id,
                quantity: 1,
              };
              const action = changeQuantityDetailAction(payload);
              dispatch(action);
            }}
          >
            +
          </button>
          {arrProductDetail.quantity}
          <button
            className="btn btn-primary"
            onClick={() => {
              const payload = {
                id: arrProductDetail.id,
                quantity: -1,
              };
              const action = changeQuantityDetailAction(payload);
              dispatch(action);
            }}
          >
            -
          </button>
          <button
            className="d-block btn btn-success mt-4"
            onClick={() => {
              const action = addProductAction({
                ...arrProductDetail,
              });
              dispatch(action);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      <h3 className="text-center">Realate Product</h3>
      <div className="row">
        {arrProductDetail.relatedProducts?.map((item) => {
          return (
            <div className="col-4" key={item.id}>
              <div className="card">
                <img src={item.image} alt="..." className="w-100" />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p className="fs-2">{item.price}</p>
                  <NavLink to={`/detail/${item.id}`} className={"btn btn-dark"}>
                    View Detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
