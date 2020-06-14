import React from "react";
import Style_Sheet from "./QuizPage.module.css"
import Heart from "../../UnCheckedHeart.svg"
import CheckedHeart from "../../CheckedHeart.svg"
import Logo from "../../MIREA_Gerb_Colour.png"
const Hearts = (props) =>
{
    let checked=[1,0,0,0,0]
    let CheckedHeartRendered = <img src={CheckedHeart} alt=""/>;
    let UnCheckedHeartRendered = <img src={Heart} alt=""/>
    let handleClick = e => {
        let hearts = document.getElementsByClassName(`${Style_Sheet.Heart}`);
        for(let i=0;i<e;i++)
        {
            for (let i=e;i<checked.length;i++)
            {
                hearts[i].append(UnCheckedHeartRendered)
                console.log(i);
            }
            hearts[e].append(CheckedHeart);
            console.log(e);
        }
    };
    return(
        <div className={Style_Sheet.Main}>
            <div className={Style_Sheet.Logo}>
                <img src={Logo} alt=""/>
            </div>
            <div>
                <div className={Style_Sheet.Question_Text}>
                    Оцените качество
                    обслуживания
                    учреждения
                </div>
                <div>
                    <div className={Style_Sheet.HeartBlock}>
                        <div onClick={() => handleClick(0)} className={Style_Sheet.Heart}>
                            <img src={CheckedHeart} alt=""/>
                        </div>
                        <div onClick={() => handleClick(1)} className={Style_Sheet.Heart}>
                            <img src={Heart} alt=""/>
                        </div>
                        <div onClick={() => handleClick(2)} className={Style_Sheet.Heart}>
                            <img src={Heart} alt=""/>
                        </div>
                        <div onClick={() => handleClick(3)} className={Style_Sheet.Heart}>
                            <img src={Heart} alt=""/>
                        </div>
                        <div onClick={() => handleClick(4)} className={Style_Sheet.Heart}>
                            <img src={Heart} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizPage;