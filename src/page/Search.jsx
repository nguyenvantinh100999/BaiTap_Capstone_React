import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import { getProductApiActionThunk } from "../redux/reducers/productReducer";
import { http } from "../util/setting";
import _ from "lodash";

const Search = () => {
  const { arrProduct } = useSelector((state) => state.productReducer);
  console.log(arrProduct);
  // const [arr]
  const [arrProductFilter, setArrProductFilter] = useState([]);
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams([]);
  // const [tuKhoa, setTuKhoa] = useState("");
  const k = search.get("k");
  const [sortType, setSortType] = useState("asc"); // Thêm state cho loại sắp xếp
  const valueKeyword = search.get("k");
  const getProductKeyword = () => {
    const actionThunk = getProductApiActionThunk(valueKeyword);
    dispatch(actionThunk);
  };
  useEffect(() => {
    getProductKeyword();
  }, [k]);
  // console.log(tuKhoa);
  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   setSearch({
  //     k: tuKhoa,
  //   });
  // };
  const renderDropDownFilter = () => {
    const dataFilter = [
      { text: "ADIDAS", value: "adidas" },
      { text: "NIKE", value: "nike" },
      { text: "CONVERS", value: "convers" },
      { text: "VAN", value: "van" },
    ];
    let options = dataFilter.map((item, index) => {
      return (
        <option key={index} value={item.value}>
          {item.text}
        </option>
      );
    });
    return (
      <select
        className="w-50 d-inline form-control mb-2"
        onChange={(e) => {
          console.log(e.target.value);
          const tuKhoa = e.target.value;
          let newArrProduct = arrProduct.filter(
            (item) => item.name.toLowerCase().search(tuKhoa) !== -1
          );
          //set lại state Arrproduct sau khi filter
          setArrProductFilter(newArrProduct);
          console.log(arrProductFilter);
        }}
      >
        {options}
      </select>
    );
  };
  const handleSort = (type) => {
    setSortType(type);
    const sortedProducts = _.orderBy(arrProduct, "price", type);
    setArrProductFilter(sortedProducts);
    console.log(sortedProducts);
  };

  return (
    <div className="container">
      <form>
        <h3 className="mt-2">Search Product</h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="input product name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              const tuKhoa = e.target.value;
              let newArrProduct = arrProduct.filter(
                (item) => item.name.toLowerCase().search(tuKhoa) !== -1
              );
              //set lại state Arrproduct sau khi filter
              setArrProductFilter(newArrProduct);
              setSearch({
                k: e.target.value,
              });
            }}
          />
          <button
            className="input-group-text"
            type="submit"
            id="basic-addon2"
            style={{ cursor: "pointer" }}
          >
            Search
          </button>
        </div>
      </form>
      <h3>Search filter</h3>
      {renderDropDownFilter()}
      <div className="mb-3">
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => handleSort("asc")}
        >
          Sort by Price (Low to High)
        </button>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => handleSort("desc")}
        >
          Sort by Price (High to Low)
        </button>
      </div>

      <h3 className="mt-2 text-center">Search result</h3>
      <div className="row">
        {(arrProductFilter.length > 0 ? arrProductFilter : arrProduct).map(
          (item) => {
            return (
              <div className="col-4" key={item.id}>
                <div className="card">
                  <img src={item.image} alt="..." />
                  <div className="card-body">
                    <h3>{item.name}</h3>
                    <div className="d-flex justify-content-between">
                      <NavLink
                        to={`/detail/${item.id}`}
                        className="btn btn-success me-2"
                      >
                        Buy Now
                      </NavLink>
                      <h3 className="">{item.price}$</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Search;
