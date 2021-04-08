import React, { useRef, useState } from 'react'
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core'
import QRCode from 'qrcode'
import QrReader from 'react-qr-reader'

function App() {

  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCan] = useState('');
  const [permissionWebCam, setPermissionWebCam] = useState(false);

  const classes = useStyles();
  const qrRef = useRef(null);

  const generateQrCode = async () => {
    try{
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch(error){
      console.log(error);
    }
  }

  const handleErrorFile = (error) => {
    console.log(error);
  }

  const handleScanFile = (result) => {
    if(result){
      setScanResultFile(result);
    }
  }

  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }

  const handleErrorWebCam = (error) => {
    console.log(error);
  }

  const handleScanWebCam = (result) => {
    if(result){
      setScanResultWebCan(result);
    }
  }

  const onScanWebCam = () => {
    setPermissionWebCam(!permissionWebCam);
  }

  return (
    <Container className={classes.container}>
      <Card>
        <h2 className={classes.title}>
          Download and Scan QR Code with react js
        </h2>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField
                label="Enter text for Qr Code"
                onChange={(e) => setText(e.target.value)}
              ></TextField>
              <br />
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={() => generateQrCode()}
              >
                Generate
              </Button>
              <br />
              <br />
              {imageUrl ? (
                <a href={imageUrl} download>
                  <img src={imageUrl} alt="img" />
                </a>
              ) : null}
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
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

            </Grid>

            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
                onClick={onScanWebCam}
              >
                Scan Qr Code By Web Cam
              </Button>
              {
                permissionWebCam ? (<QrReader
                  delay={300}
                  style={{width: '100%'}}
                  onError={handleErrorWebCam}
                  onScan={handleScanWebCam}
                />) : null
              }
                

                  <h3>Scan By Web cam Code: {scanResultWebCam}</h3>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '10px'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3f51b5',
    color: '#fff',
    padding: 20
  },
  btn: {
    marginTop : '10px',
    marginBottom : '20px',
  }
}));

export default App;
