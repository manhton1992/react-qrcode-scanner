import React from 'react'
import {Container, Card, CardContent, makeStyles, Grid} from '@material-ui/core'
import { CreateQrCode } from './qr-services/create/index'
import { ScanQrCodeFile } from './qr-services/scanFile/index'
import { ScanQrCodeWebCam} from './qr-services/scanWebCam/index'

function App() {

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card>
        <h2 className={classes.title}>
          Download and Scan QR Code with react js
        </h2>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <CreateQrCode />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <ScanQrCodeFile />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <ScanQrCodeWebCam />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export const useStyles = makeStyles((theme) => ({
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
