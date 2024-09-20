import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductApiActionThunk } from "../redux/reducers/productReducer";
import Test from "./test";

const Index = () => {
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state) => state.productReducer);
  console.log(arrProduct);
  const getAllProduct = () => {
    const actionThunk = getProductApiActionThunk();
    dispatch(actionThunk);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="container">
      <h3 className="text-center">SHOES SHOP</h3>
      <div className="row">
        {arrProduct.map((item) => {
          return (
            <div className="col-4" key={item.id}>
              <div className="card">
                <img src={item.image} alt="..." className="w-100 h-100" />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <div className="d-flex justify-content-between">
                    <NavLink
                      to={`./detail/${item.id}`}
                      className="btn btn-dark me-2"
                    >
                      Buy Now
                    </NavLink>
                    <h3 className="">{item.price}$</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
