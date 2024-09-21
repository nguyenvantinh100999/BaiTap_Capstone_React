import { createSlice } from "@reduxjs/toolkit";
import { http, navigateHistory } from "../../util/setting";
import { getProductApiActionThunk } from "./productReducer";
import { getProfileActionAsync } from "./userReducer";

const initialState = {
  cart: [
    {
      id: 1,
      name: "product 1000",
      price: 1000,
      quantity: 1,
      image: "https://picsum.photos/200/200",
    },
  ],
  cartOrder: [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addProductAction: (state, action) => {
      const { payload } = action;

      const itemCart = state.cart.find((item) => item.id === payload.id);
      if (itemCart) {
        itemCart.quantity += 1;
      } else {
        state.cart.push(payload);
      }
    },
    changeQuantityProductAction: (state, action) => {
      const { payload } = action;
      console.log(state.cart);
      let itemCart = state.cart.find((item) => item.id === payload.id);
      if (itemCart) {
        itemCart.quantity += payload.quantity;
      }
    },
    deleteProductAction: (state, action) => {
      const { payload } = action;
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    setCartOder: (state, action) => {
      const { payload } = action;
      state.cartOrder = payload;
    },
  },
});

export const {
  addProductAction,
  changeQuantityProductAction,
  deleteProductAction,
  setCartOder,
} = cartReducer.actions;

export default cartReducer.reducer;

export const orderProductAction = (order) => {
  return async (dispatch) => {
    const res = await http.post(
      "https://shop.cyberlearn.vn/api/Users/order",
      order
    );
    alert("Đặt hàng thành công");
    const actionAsync = getProfileActionAsync();
    dispatch(actionAsync);
    navigateHistory.push("/profile");
  };
};
