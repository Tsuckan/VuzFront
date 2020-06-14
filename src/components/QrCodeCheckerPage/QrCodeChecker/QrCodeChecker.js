import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import Style_Sheet from "./QrCodeChecker.module.css"
import { useHistory } from "react-router"

class QrCodeChecker extends Component {
    state = {
        result: 'No result'
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data,
            })
            console.log(data);
            document.location='hi'
        }
        // eslint-disable-next-line no-restricted-globals

    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
            <div className={Style_Sheet.QrReader}>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
            </div>
        )
    }
}

export default QrCodeChecker;