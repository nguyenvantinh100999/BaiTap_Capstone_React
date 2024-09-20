import { createSlice } from "@reduxjs/toolkit";
import {
  http,
  navigateHistory,
  setCookie,
  TOKEN,
  USER_LOGIN,
} from "../../util/setting";
let getUserLoginDefault = () => {
  if (localStorage.getItem(USER_LOGIN)) {
    const useDefalt = JSON.parse(localStorage.getItem(USER_LOGIN));
    return useDefalt;
  }
  return null;
};
const initialState = {
  userLogin: getUserLoginDefault(),
  userRegister: {},
  profile: {},
  updateProfile: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLoginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    setUserRegisterAction: (state, action) => {
      state.userRegister = action.payload;
    },
    setUserProfileAction: (state, action) => {
      state.profile = action.payload;
    },
    setUpdateProfileAction: (state, action) => {
      state.updateProfile = action.payload;
    },
  },
});

export const {
  setUserLoginAction,
  setUserRegisterAction,
  setUserProfileAction,
  setUpdateProfileAction,
} = userReducer.actions;

export default userReducer.reducer;

export const loginActionAsync = (userLoginModel) => {
  return async (dispatch) => {
    const res = await http.post(
      "https://shop.cyberlearn.vn/api/Users/signin",
      userLoginModel
    );
    const token = res.data.content.accessToken;
    const userLogin = JSON.stringify(res.data.content);
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(USER_LOGIN, userLogin);
    setCookie(TOKEN, token, 7);

    const actionPayload = setUserLoginAction(res.data.content);
    dispatch(actionPayload);
    alert("Đăng nhập thành công");
    //gọi api getProfile
    const actionAsync = getProfileActionAsync();
    dispatch(actionAsync);
    navigateHistory.push("/profile");
  };
};

export const registerActionAsync = (userRegisterModel) => {
  return async (dispatch) => {
    try {
      const res = await http.post(
        "https://shop.cyberlearn.vn/api/Users/signup",
        userRegisterModel
      );
      const actionPayload = setUserLoginAction(res.data.content);
      dispatch(actionPayload);
      alert("Đăng ký thành công");
      navigateHistory.push("/profile");
    } catch (err) {
      console.log(err);
      alert("Đăng ký thất bại");
      navigateHistory.push("/");
    }
  };
};

export const getProfileActionAsync = () => {
  return async (dispatch) => {
    try {
      const res = await http.post(
        "https://shop.cyberlearn.vn/api/Users/getProfile"
      );
      console.log(res.data.content);
      const actionPayload = setUserProfileAction(res.data.content);
      dispatch(actionPayload);
    } catch (err) {
      console.log(err);
      alert("Đăng nhập để vào trang profile");
      navigateHistory.push("/login");
    }
  };
};

export const getUpdateProfileActionAsync = (updateProfile) => {
  return async (dispatch) => {
    const res = await http.post(
      "https://shop.cyberlearn.vn/api/Users/updateProfile",
      updateProfile
    );
    const actionPayload = setUpdateProfileAction(res.data.content);
    dispatch(actionPayload);
    alert("Update profile thành công");
  };
};
