import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { SingleProduct } from "../Pages/SingleProduct/SingleProduct";

export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/deshboard" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
};
