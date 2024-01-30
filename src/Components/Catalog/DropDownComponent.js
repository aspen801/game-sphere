import React from 'react'
import { useSelector } from 'react-redux'
import "./DropDownComponent.scss"
const DropDownPc = ({styles}) => {
    return(
        <div className={styles ? "visibility1 catalogPc" : "hidden catalogPc"}>
            <div>
                <ul>
                    <li>Готові рішення</li>
                    <li>Процесори</li>
                    <li>Монітори</li>
                    <li>Кулери</li>
                    <li>Материнські плати</li>
                    <li>Відеокарти</li>
                    <li>Оперативна пам’ять</li>
                </ul>
            </div>
        </div>
    )
}
export const DropDownComponent = () => {
    const index = useSelector(state => state.index)
    return (
            <div>
                {index === 0 ? <DropDownPc styles={true}/> : <DropDownPc styles={false}/>}
                {index === 1 ? <div>d1aw</div> : null}
                {index === 2 ? <div>da2w</div> : null}
                {index === 3 ? <div>daw3</div> : null}
                {index === 4 ? <div>daw5</div> : null}
                {index === 5 ? <div>da6</div> : null}
            </div>
    )
}
