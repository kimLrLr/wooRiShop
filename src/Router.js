import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Basket } from "./pages/basket/Basket";
import { Login } from "./pages/login/Login";
import { Join } from "./pages/join/Join";
import { PageNotFound } from "./pages/PageNotFound";
import { Product } from "./pages/product/Product";
import { Detail } from "./pages/detail/Detail";
import { routes } from "./routes";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.main} element={<Main />} />
        <Route path={routes.product} element={<Product />} />
        <Route path={routes.basket} element={<Basket />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.join} element={<Join />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
