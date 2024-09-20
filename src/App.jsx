import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import Index from "./page/Index";
import HomePageMaster from "./MasterPage/HomePageMaster";
import Login from "./page/login";
import Register from "./page/register";
import Profile from "./page/profile";
import Search from "./page/search";
import Cart from "./page/cart";
import Detail from "./page/detail";
import Page404 from "./page/Page404";
import { Provider } from "react-redux";
import { store } from "./redux/store";
//câu hình CustonBrowserHistory
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { navigateHistory } from "./util/setting";

const App = () => {
  return (
    <HistoryRouter history={navigateHistory}>
      <Provider store={store}>
        <Routes>
          <Route path="" element={<HomePageMaster />}>
            <Route index element={<Index />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="search" element={<Search />} />
            <Route path="cart" element={<Cart />} />
            <Route path="detail">
              <Route path=":prodId" element={<Detail />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Provider>
    </HistoryRouter>
  );
};

export default App;
