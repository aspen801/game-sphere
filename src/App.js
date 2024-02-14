import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/:id" />
      <Route path="/catalog" element={<MainPage />} />
      <Route path="/catalog/:category" />
      <Route path="/catalog/:category/:subcategory" />
      <Route path="/shop" />
      <Route path="/user-agreement" />
      <Route path="/cart" />
      <Route path="/order" />
      <Route path="*" />
    </Routes>
  );
};

export default App;
