import React from "react";

import actionItemImg from "@resources/png/actionImgItem1.png";

import "./ActionItem.scss";

const ActionItem = () => {
  return (
    <div className="action_item">
      <div className="container_action_item">
        <div className="content_action_item">
          <h3>Створений іншим Створений для творців</h3>
          <p className="desktop_text">
            Незалежно від того, чи є ви художником-початківцем чи ветераном
            індустрії, який прагне зробити все якнайкраще, студійні комп’ютери
            серії NVIDIA GeForce RTX® 40 дозволять це зробити швидко
          </p>
          <p className="mobile_text">
            Студійні комп’ютери серії NVIDIA GeForce RTX® 40{" "}
          </p>
          <a href="#">Перейти до каталогу</a>
        </div>
        <img src={actionItemImg} className="action_item_img" alt="actionImg" />
      </div>
    </div>
  );
};

export default ActionItem;
