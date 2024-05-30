import React from "react";

import CartTotalPriceMobile from "@modules/cart/components/CartTotalPriceMobile/CartTotalPriceMobile";
import MobileCart from "@modules/cart/components/MobileCart/MobileCart";
import AppDrawer from "@modules/common/AppDrawer";

const HeaderCart = ({ isOpenCart, setIsOpenCart }) => {
  return (
    <AppDrawer
      titleContent={<p></p>}
      isOpen={isOpenCart}
      onClose={() => setIsOpenCart(false)}
      anchor={"left"}
      renderLine={false}
    >
      <MobileCart />
      <CartTotalPriceMobile onClose={() => setIsOpenCart(false)} />
    </AppDrawer>
  );
};

export default HeaderCart;
