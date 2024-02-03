import search from "../resources/svg/Search.svg"
import arrow from "../resources/svg/arrow.svg"
import arrowDropLng from "../resources/svg/arrowDropLng.svg"
import profile from "../resources/svg/Profile.svg"
import heart from "../resources/svg/heart.svg"
import balance from "../resources/svg/balance.svg"
import shoppingCart from "../resources/svg/shoppingCart.svg"
import menu from "../resources/svg/menu.svg"
import phone from "../resources/svg/phone.svg"
import logoSvg from "../resources/svg/Logo.svg"
import LogoMobileSvg from "../resources/svg/LogoMobile.svg"
import arrowUpLng from "../resources/svg/arrowUpLng.svg"

const giveSvg = (name) => {
    switch(name){
        case "arrow":
            return <img src={arrow} alt={name} className={name} />
        case "logoSvg":
            return <img src={logoSvg} alt={name} className="logo" />
        case "LogoMobileSvg":
            return <img src={LogoMobileSvg} alt={name} className="logo_mobile" />
        case "search":
            return <img src={search} alt={name} className={name} />
        case "arrowDropLng":
            return <img src={arrowDropLng} alt={name} className={name} />
        case "arrowUpLng":
            return <img src={arrowUpLng} alt={name} className={name} />
        case "profile":
            return <img src={profile} alt={name} className={name} />
        case "heart":
            return <img src={heart} alt={name} className={name} />
        case "balance":
            return <img src={balance} alt={name} className={name} />
        case "shoppingCart":
            return <img src={shoppingCart} alt={name} className={name} />
        case "menu":
            return <img src={menu} alt={name} className={name} />
        case "phone":
            return <img src={phone} alt={name} className={name} />
        default:
            return null
    }

}


export default giveSvg