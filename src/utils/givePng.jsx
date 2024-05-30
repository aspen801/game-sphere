import SotArmchair from "../resources/png/SotArmchair.png";
import SotDisplay from "../resources/png/SotDisplay.png";
import SotHeadphones from "../resources/png/SotHeadphones.png";
import SotKeyBoard from "../resources/png/SotKeyBoard.png";
import SotLaptop from "../resources/png/SotLaptop.png";
import SotMouse from "../resources/png/SotMouse.png";
import SotsLeft from "../resources/png/SotsLeft.png";
import SotsPhone from "../resources/png/SotsPhone.png";
import SotsRight from "../resources/png/SotsRight.png";
import SotsTablet from "../resources/png/SotsTablet.png";

const givePng = (name) => {
  switch (name) {
    case "SotsLeft":
      return <img src={SotsLeft} alt={name} className={name} />;
    case "SotsRight":
      return <img src={SotsRight} alt={name} className={name} />;
    case "SotsTablet":
      return <img src={SotsTablet} alt={name} className={name} />;
    case "SotsPhone":
      return <img src={SotsPhone} alt={name} className={name} />;
    case "SotMouse":
      return <img src={SotMouse} alt={name} className={name} />;
    case "SotHeadphones":
      return <img src={SotHeadphones} alt={name} className={name} />;
    case "SotDisplay":
      return <img src={SotDisplay} alt={name} className={name} />;
    case "SotKeyBoard":
      return <img src={SotKeyBoard} alt={name} className={name} />;
    case "SotArmchair":
      return <img src={SotArmchair} alt={name} className={name} />;
    case "SotLaptop":
      return <img src={SotLaptop} alt={name} className={name} />;
    default:
      return null;
  }
};

export default givePng;
