import React, { useState } from "react";
import { Box, Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { FormationIndex } from "../../constants";

import { IconButtonList, SelectedList } from "../character/iconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#393c40",
    maxWidth: "500px",
    maxHeight: "500px",
    overflowY: "scroll",
  },
  selected: {
    backgroundColor: "#393c40",
    width: "400px",
    height: "80px",
    padding: "5px 5px",
    margin: "20px 0px 10px 0px",
    borderRadius: "10px",
  },
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

// 登録ページ
const Register = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState([]);

  const onReset = () => {
    setSelectedIndex([]);
  };

  return (
    <>
      <Card
        classes={{
          root: classes.root,
        }}
      >
        <IconButtonList
          index={FormationIndex}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Card>
      <Box
        display="flex"
        alignItems="left"
        classes={{
          root: classes.selected,
        }}
      >
        <SelectedList
          index={FormationIndex}
          selectedIndex={selectedIndex}
        />
      </Box>
      <div className={classes.buttons}>
        <Button variant="contained" onClick={() => onReset()}>Reset</Button>
        <Button variant="contained" color="primary">Register</Button>
      </div>
    </>
  );
}

export default Register;
