import React, { useEffect } from "react";
import "./AppDrawer.scss";
import { Drawer } from "@mui/material";
import useWindowSize from "../../../hooks/useWindowSize";
import CloseButton from "../../../resources/svg/closeButton.svg";

const AppDrawer = ({
  titleContent = "",
  isOpen,
  onClose,
  anchor = "left",
  children,
  renderLine = "true",
}) => {
  const windowSize = useWindowSize();
  const isBottom = anchor === "bottom";

  useEffect(() => {
    if (isOpen && windowSize.width > 880) {
      onClose();
    }
  }, [windowSize, isOpen, onClose]);

  return (
    <Drawer
      className="app-drawer"
      anchor={anchor}
      open={isOpen}
      onClose={onClose}
    >
      <div className="app-drawer__head">
        <div className="app-drawer__head-content">
          {titleContent}
          <img
            className="app-drawer__close-button"
            src={CloseButton}
            onClick={onClose}
            alt="close_burger"
          />
        </div>
        {!isBottom && (
          <div
            className="app-drawer__divider"
            style={renderLine ? { display: "block" } : { display: "none" }}
          />
        )}
      </div>

      <div className={`app-drawer__content ${isBottom ? "bottom" : ""}`}>
        {children}
      </div>
    </Drawer>
  );
};

export default AppDrawer;
