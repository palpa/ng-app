const barcodescanner = require('nativescript-barcodescanner');

export class BarCodeScanner {
  scan(message) {
    return barcodescanner.scan({
      cancelLabel: 'Stop scanning', // iOS only, default 'Close'
      message: message, // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
      preferFrontCamera: false,     // Android only, default false
      showFlipCameraButton: true    // Android only, default false (on iOS it's always available)
    }).then((result) => {
      console.log('Scan format: ' + result.format);
      console.log('Scan text:   ' + result.text);

      return result.text;
    }, (error) => {
      console.log('No scan: ' + error);
    });
  }
}

export default new BarCodeScanner();