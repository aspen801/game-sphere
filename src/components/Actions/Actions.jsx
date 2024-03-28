import React from 'react'
import "./Actions.scss"
import Carousel, {consts} from "@itseasy21/react-elastic-carousel";
import arrowleft from "../../resources/svg/ArrowLeft.svg"
import arrowright from "../../resources/svg/ArrowRight.svg"
import ActionItem from '../ActionsItem/ActionItem';
import actionSotsLeft from "../../resources/svg/actionSotsLeft.svg"
import actionSotsRight from "../../resources/svg/actionSotsRight.svg"
import actionSotsLeftTab from "../../resources/svg/sotSmallActionTab.svg"
import actionSotsRightTab from "../../resources/svg/sotsRightActionTab.svg"
import actionSotsRightMobile from "../../resources/svg/sotsRightActionMobile.svg"
const Actions = () => {
    const breakPoints = [
        {width: 625, renderArrow: false},
        {width: 1220, itemsToShow: 1, pagination: true},
      ]
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <img src={arrowleft} alt='arrowLeft'/> : <img src={arrowright} alt='arrowRight' />
          return (
            <div className='slide_buttons' onClick={onClick} disabled={isEdge}>
              {pointer}
            </div>
          )
      }
  return (
    <div className='actions'>
        <img src={actionSotsLeft} className='action_sots_left' alt='sots'/>
        <img src={actionSotsRight} className='action_sots_right' alt='sots'/>
        <img src={actionSotsLeftTab} className='action_sots_left_tab' alt='sots'/>
        <img src={actionSotsRightTab} className='action_sots_right_tab' alt='sots'/>
        <img src={actionSotsRightMobile} className='action_sots_right_Mobile' alt='sots'/>
        <div className='actions_container'>
            <Carousel className='actions_carousel' itemsToShow={1} breakPoints={breakPoints} renderArrow={myArrow} >
                <ActionItem/>
                <ActionItem/>
                <ActionItem/>
                <ActionItem/>
            </Carousel>
        </div>
    </div>
  )
}

export default Actions;
