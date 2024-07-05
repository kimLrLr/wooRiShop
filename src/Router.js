import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Basket } from "./pages/basket/Basket";
import { Login } from "./pages/login/Login";
import { Join } from "./pages/join/Join";
import { PageNotFound } from "./pages/PageNotFound";
import { Product } from "./pages/product/Product";
import { Detail } from "./pages/detail/Detail";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Logout } from "./pages/login/Logout";
import { Signup } from "./pages/join/Signup";

const Router = () => {
  const user = useSelector(selectUser);

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.main} element={<Main />} />
        <Route path={routes.product} element={<Product />} />
        <Route path={routes.basket} element={<Basket />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.logout} element={<Logout />} />
        <Route path={routes.join} element={<Join />} />
        <Route path={routes.signup} element={<Signup />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path="/*" element={<PageNotFound />} />

        {/* <div>{user ? <Logout /> : <Login />};</div> */}
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
