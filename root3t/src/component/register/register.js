import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { NomalIndex } from "../../constants";

import { IconButtonList } from "../character/iconButton";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#393c40",
    maxWidth: "500px",
    maxHeight: "500px",
    overflowY: "scroll",
  },
});

// 登録ページ
const Register = () => {
  const classes = useStyles();
  return (
    <>
      <Card
        classes={{
          root: classes.root,
        }}
      >
        <IconButtonList index={NomalIndex} />
      </Card>
    </>
  );
}

export default Register;
