import React, { useEffect } from "react";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import { getProfileActionAsync } from "../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const LoginFacebook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responseFacebook = async (response) => {
    try {
      const res = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
        method: "POST",
        data: {
          facebookToken: response.accessToken,
        },
      });
      localStorage.setItem("accessToken", res.data.content.accessToken);
      localStorage.setItem("email", res.data.content.email);
      alert("Đăng nhập thành công");
      const actionAsync = getProfileActionAsync();
      dispatch(actionAsync);
      navigate("/profile");

      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Đăng nhập thất bại");
    }
  };
  useEffect(() => {
    responseFacebook();
  }, []);
  return (
    <div>
      <FacebookLogin
        appId="1063493771857996"
        // autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

export default LoginFacebook;
