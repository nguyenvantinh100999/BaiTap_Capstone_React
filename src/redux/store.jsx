//file này sẽ chứa toàn bộ state ứng dụng
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import orderReducer from "./reducers/orderReducer";
export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    cartReducer: cartReducer,
    userReducer: userReducer,
    orderReducer: orderReducer,
  },
});
