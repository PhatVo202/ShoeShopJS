import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/Login.css";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginApi } from "../../redux/reducers/userReducer";
//facebookLogin

import FacebookLogin from "react-facebook-login";
const Login = () => {
  const dispatch = useDispatch();

  // const responseFacebook = (res) => {
  //   console.log(res);

  //   if (res?.accessToken) {
  //     let facebookTokenAccess = {
  //       facebookToken: res.accessToken,
  //     };
  //     const action = facebookLogin(facebookTokenAccess);
  //     dispatch(action);
  //   }
  // };

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email cannot be blank!")
        .email("Email is invalid!"),
      password: yup.string().required("Password cannot be blank!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const action = loginApi(values);
      dispatch(action);
    },
  });
  return (
    <div>
      <div className="login-title container">
        <h1>Login</h1>
      </div>
      <div className="pt-5">
        <form className="container" onSubmit={form.handleSubmit}>
          <div className="form-content form-group">
            <p>Email</p>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.email && (
              <p className="text-danger">{form.errors.email}</p>
            )}
          </div>
          <div className="form-content form-group">
            <p>Password</p>
            <input
              className="form-control"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.passowrd && (
              <p className="text-danger">{form.errors.password}</p>
            )}
          </div>
          <div className="row form-content">
            <div className="login">
              <NavLink to="/register" className="register">
                Register
              </NavLink>
              <button type="submit" className="btn-login">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
