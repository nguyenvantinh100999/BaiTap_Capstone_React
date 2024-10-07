import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { loginActionAsync } from "../redux/reducers/userReducer";
import LoginFacebook from "./LoginFacebook";
const Login = () => {
  const dispatch = useDispatch();
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const actionThunk = loginActionAsync(values);
      dispatch(actionThunk);
    },
  });
  return (
    <div className="container">
      <h3 className="text-center">Login</h3>
      <div className="mx-auto my-0 w-50 form-control">
        <form onSubmit={frmLogin.handleSubmit} className="">
          <div className="form-group ">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              name="email"
              id="email"
              placeholder="Nhập email"
              onChange={frmLogin.handleChange}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="email">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="Nhập password"
              onChange={frmLogin.handleChange}
            />
          </div>
          <div className="form-group d-flex justify-content-between mt-2">
            <NavLink
              to={`/register`}
              className={"text-primary text-decoration-none"}
            >
              Resgister Now ?
            </NavLink>
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => {
                {
                  frmLogin.handleSubmit;
                }
              }}
            >
              Login
            </button>
          </div>
        </form>
        <div className="form-group my-2">
          <div className="d-flex align-items-center justify-content-center text-center">
            <button
              className="btn btn-primary d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "rgb(76,105,186)" }}
            >
              <i class="fab fa-facebook-f"></i>
              <div className="bg-primary d-inline">
                <LoginFacebook />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
