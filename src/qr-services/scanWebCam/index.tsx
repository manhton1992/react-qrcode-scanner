import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useStyles } from "../../App";
import { Button } from "@material-ui/core";
import QrReader from "react-qr-reader";

export const ScanQrCodeWebCam: React.FC<RouteComponentProps> = () => {
  const [scanResultWebCam, setScanResultWebCan] = useState("");
  const [permissionWebCam, setPermissionWebCam] = useState(false);

  const classes = useStyles();

  const handleErrorWebCam = (error: Error) => {
    console.log(error);
  };

  const handleScanWebCam = (result: any) => {
    if (result) {
      setScanResultWebCan(result);
    }
  };

  const onScanWebCam = () => {
    setPermissionWebCam(!permissionWebCam);
  };
  return (
    <div>
      <Button
        className={classes.btn}
        variant="contained"
        color="secondary"
        onClick={onScanWebCam}
      >
        Scan Qr Code By Web Cam
      </Button>
      {permissionWebCam ? (
        <QrReader
          delay={300}
          style={{ width: "100%" }}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
        />
      ) : null}

      <h3>Scan By Web cam Code: {scanResultWebCam}</h3>
    </div>
  );
};
