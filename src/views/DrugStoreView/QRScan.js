//QR스캔 및 환자정보 보여주기

import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import QRCode from 'qrcode.react';
// qrcode.react -> QR코드 생성하는 패키지, 사용법: <QRCode value={"값"} />

class QRReader extends Component {
    state = {
        result: ''
    }
  
    // 이미지 스캔 결과물 (data는 주소)
    handleScan = data => {
      this.setState({
        result: data
      });
    }

    // 에러 처리 함수 (관상용)
    handleError = err => {
      console.error(err)
    }

    // 이미지 로드 버튼
    openImageDialog = () => {
      this.refs.reader.openImageDialog();
    }

  render() {
    return (
      <div>

        <QRCode value={"1234567890f"} /> <br /><br />

	    <button onClick={this.openImageDialog}> Insert QRCode </button> <br /><br />

        <QrReader
          onError={this.handleError}
          onScan={this.handleScan}
		  legacyMode={true}
		  ref="reader"
          style={{ width: '0%' }}
        />

        <h1> {this.state.result} </h1>

      </div>
    )
  }
}
export default QRReader;