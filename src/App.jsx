import React from "react";

import CartPage from "@modules/cart";
import CatalogPage from "@modules/catalog/";
import Footer from "@modules/footer";
import Header from "@modules/header";
import MainPage from "@modules/home";
import NavigationMenu from "@modules/navigation";
import { Route, Routes } from "react-router-dom";

import { modalInfo } from "./mockData";

const App = () => {
  return (
    <>
      <Header modalInfo={modalInfo} />
      <NavigationMenu modalInfo={modalInfo} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" />
        <Route path="/catalog" element={<MainPage />} />
        <Route
          path="/catalog/:category"
          element={<CatalogPage modalInfo={modalInfo} />}
        />
        <Route
          path="/catalog/:category/:subcategory"
          element={<CatalogPage modalInfo={modalInfo} />}
        />
        <Route path="/shop" />
        <Route path="/user-agreement" />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" />
        <Route path="*" />
      </Routes>
      <Footer modalInfo={modalInfo} />
    </>
  );
};

export default App;
