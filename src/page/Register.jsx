import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { registerActionAsync } from "../redux/reducers/userReducer";

const Register = () => {
  const dispatch = useDispatch();
  const frmRegister = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: true,
      phone: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email is a required")
        .email("email is invalid !"),
      phone: yup
        .string()
        .required("phone is a required")
        .matches(
          /^(0[1-9]{1}[0-9]{8}|(84|0)(9[0-9]|8[1-9]|7[0-9]|6[2-9]|5[0-9]|4[0-9]|3[2-9]|2[0-9]|1[0-9])[0-9]{7})$/,
          "phone is invalid(ex:0909090909)"
        ),
      password: yup
        .string()
        .required("password is required")
        .min(6, "6-10 ký tự")
        .max(10, "6-10 ký tự"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const actionThunk = registerActionAsync(values);
      dispatch(actionThunk);
    },
  });
  return (
    <div className="container">
      <h3 className="text-center">Register</h3>
      <div className="w-50 mx-auto my-0">
        <form
          action=""
          className="form-control"
          onSubmit={frmRegister.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={frmRegister.handleChange}
              onBlur={frmRegister.handleBlur}
            />
            {frmRegister.errors.email && (
              <p className="alert alert-danger my-1">
                {frmRegister.errors.email}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="Password"
              className="form-control"
              placeholder="Enter your Password"
              onChange={frmRegister.handleChange}
              onBlur={frmRegister.handleBlur}
            />
            {frmRegister.errors.password && (
              <p className="alert alert-danger my-1">
                {frmRegister.errors.password}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              onChange={frmRegister.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              className="form-control"
              onChange={frmRegister.handleChange}
            >
              <option value="true">Male</option>
              <option value="false">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="Enter your Password"
              onChange={frmRegister.handleChange}
              onBlur={frmRegister.handleBlur}
            />
            {frmRegister.errors.phone && (
              <p className="alert alert-danger my-1">
                {frmRegister.errors.phone}
              </p>
            )}
          </div>
          <div className="form-group">
            <button
              className="btn btn-success w-100 mt-2"
              type="submit"
              onClick={() => {
                frmRegister.handleSubmit;
              }}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
