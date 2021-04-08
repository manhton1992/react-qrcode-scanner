import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Button, TextField } from "@material-ui/core";
import { useStyles } from "../../App";
import QRCode from "qrcode";

export const CreateQrCode: React.FC<RouteComponentProps> = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const classes = useStyles();

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
    </div>
  );
};
