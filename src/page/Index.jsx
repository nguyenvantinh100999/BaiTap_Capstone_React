import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductApiActionThunk } from "../redux/reducers/productReducer";
import "../styles/product.scss";
import Carousel from "../components/Carousel";
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
    <div className="">
      <Carousel />
      <div className="products">
        <div className="container">
          <div className="product-clipped-text">
            <h2 className="clipped-text">BESTSELLER</h2>
          </div>

          <div className="row">
            {arrProduct.map((item) => {
              return (
                <div className="col-3 mb-4" key={item.id}>
                  <div className="card h-100">
                    <div className="card-body rounded-top">
                      <img src={item.image} alt="..." className="w-100" />
                      <h4>{item.name}</h4>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                      <div className="slide-btn">
                        <NavLink
                          to={`./detail/${item.id}`}
                          className="btn btn-dark me-2"
                        >
                          Buy Now
                        </NavLink>
                      </div>
                      <h5>{item.price}$</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
