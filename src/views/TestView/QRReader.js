import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

class QRReader extends Component {
	state = {
		result: 'No data',
	};
  
    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }

  handleError = err => {
    console.error(err)
  }

  openImageDialog = () => {
	  this.refs.reader.openImageDialog();
  }

  render() {
    return (
      <div>
	    <button onClick={this.openImageDialog}> Image Load </button>
        
        <QrReader
          delay={300}
          onError={this.handleError}
		  onImageLoad={this.handleScan}
          onScan={this.handleScan}
		  legacyMode={true}
		  ref="reader"
          style={{ width: '100%' }}
        />

            <p>{this.state.result}</p>
      </div>
    )
  }
}
export default QRReader;