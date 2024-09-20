import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/setting";

const initialState = {
  arrProduct: [],
  arrProductDetail: {},
  // arrProductSearch: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    setProductDetailAction: (state, action) => {
      state.arrProductDetail = action.payload;
    },
    changeQuantityDetailAction: (state, action) => {
      console.log(state);
      const { payload } = action;
      console.log(payload);
      if (state.arrProductDetail.id === payload.id) {
        const newQuantity = state.arrProductDetail.quantity + payload.quantity;
        state.arrProductDetail.quantity = Math.max(newQuantity, 0);
      }
      // let itemDetail = state.arrProductDetail.find(
      //   (item) => item.id === payload.id
      // );
      // if (itemDetail) {
      //   itemDetail = {
      //     ...itemDetail,
      //     quantity: state.arrProductDetail.quantity + payload.quantity,
      //   };
      //   state.arrProductDetail = state.arrProductDetail.map((item) =>
      //     item.id === payload.id ? itemDetail : item
      //   );
      // }
    },
    setProductSearchAction: (state, action) => {
      state.arrProductSearch = action.payload;
    },
  },
});

export const {
  setProductAction,
  setProductDetailAction,
  changeQuantityDetailAction,
  setProductSearchAction,
} = productReducer.actions;

export default productReducer.reducer;

//------------------------ action thunk --------------------
export const getProductApiActionThunk = (keyword) => {
  return async (dispatch) => {
    let url = "https://shop.cyberlearn.vn/api/Product";
    if (keyword) {
      url = `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`;
    }
    const res = await http.get(url);
    const actionPayload = setProductAction(res.data.content);
    dispatch(actionPayload);
  };
};

export const getProductDetailApiActionThunk = (id) => {
  return async (dispatch) => {
    const res = await http.get(
      `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
    );
    const actionPayload = setProductDetailAction(res.data.content);
    dispatch(actionPayload);
  };
};
