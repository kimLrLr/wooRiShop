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
import { useState } from "react";

const Router = () => {
  // const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.main} element={<Main />} />
        <Route path={routes.product} element={<Product />} />
        <Route
          path={routes.basket}
          element={<Basket cart={cart} setCart={setCart} />}
        />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.join} element={<Join />} />
        <Route
          path={routes.detail}
          element={<Detail cart={cart} setCart={setCart} />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
