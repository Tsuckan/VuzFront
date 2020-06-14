import React from "react";
import Style_Sheet from "./QrCodeCheckerPage.module.css"
import QrCodeChecker from "./QrCodeChecker/QrCodeChecker";

const QrCodeCheckPage = (props) =>
{
    return(
        <div className={Style_Sheet.Main}>
            <div className={Style_Sheet.ScanMsg}>
                Отсканируйте QR код <br></br> на вашем талоне
            </div>
            <QrCodeChecker/>
                <div className={Style_Sheet.Button1}>
                    <a href="QrError.html">Разрешить использовать камеру</a>
                </div>
                <p>ИЛИ</p>
                <div className={Style_Sheet.Button2}>
                    <a href="Question.html">Загрузить фото талона</a>
                </div>
        </div>
    )
}

export default QrCodeCheckPage;