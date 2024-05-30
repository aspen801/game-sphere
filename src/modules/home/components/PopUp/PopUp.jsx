import React, { useEffect, useRef, useState } from "react";

import useClickOutside from "@hooks/useClickOutSide";
import sotsLeft from "@resources/png/sotsPopUpLeft.png";
import sotsRight from "@resources/png/sotsPopUpRight.png";
import CloseButton from "@resources/svg/closeButton.svg";

import "./popUp.scss";

const PopUp = () => {
  // useEffect(() => {
  //     const PopUpTimer = setTimeout(() => setOpen(true),15000)
  //     return () => clearTimeout(PopUpTimer)
  // },[])
  const [open, setOpen] = useState(false);
  const PopUpRef = useRef();
  useClickOutside(PopUpRef, () => {
    setOpen(false);
  });
  open
    ? document.body.classList.add("active")
    : document.body.classList.remove("active");
  return (
    <div className="PopUp_position">
      <div
        className={open ? "background_PopUp active" : "background_PopUp"}
      ></div>
      <div className={open ? "PopUp active" : "PopUp"} ref={PopUpRef}>
        <img src={sotsLeft} alt="sots" className="sots_PopUp_left" />
        <img src={sotsRight} alt="sots" className="sots_PopUp_right" />
        <img
          src={CloseButton}
          alt="close"
          className="PopUp_closebtn"
          onClick={() => setOpen(false)}
        />
        <div className="PopUp_content">
          <div className="PopUp_container">
            <p>10% знижки на перше замовлення</p>
            <p>
              Також ви будете першими дізнаватись про наші новинки та
              ексклюзивні пропозиції
            </p>
            <form action="">
              <div className="PopUp_input">
                <input type="text" placeholder="Електронна пошта" />
                <button>Підписатись</button>
              </div>
              <div className="PopUp_checkbox">
                <input type="checkbox"></input>
                <p>Я ознайомлений(а) з умовами політики кофеденційності</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
