import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Detail } from "./pages/detail/Detail";
import { Basket } from "./pages/basket/Basket";
import { Login } from "./pages/login/Login";
import { Join } from "./pages/join/Join";
import { PageNotFound } from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
