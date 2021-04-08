import React, { useRef, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Button } from '@material-ui/core';
import { useStyles } from '../../App'
import QrReader from 'react-qr-reader'

export const ScanQrCodeFile: React.FC<RouteComponentProps> = () => {

    const [scanResultFile, setScanResultFile] = useState('');
    const classes =  useStyles();
    const qrRef = useRef<any>(null);

    const handleErrorFile = (error: Error) => {
        console.log(error);
      }
    
      const handleScanFile = (result: any) => {
        if(result){
          setScanResultFile(result);
        }
      }
    
      const onScanFile = () => {
        qrRef.current.openImageDialog();
      }

    return(
        <div>
            <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
                onClick={onScanFile}
              >
                Scan Qr Code
              </Button>
              <QrReader
              ref={qrRef}
              delay={300}
              style={{width: '100%'}}
              onError={handleErrorFile}
              onScan={handleScanFile}
              legacyMode
              />
              <h3>Scanned Code: {scanResultFile}</h3>
        </div>
    );
}