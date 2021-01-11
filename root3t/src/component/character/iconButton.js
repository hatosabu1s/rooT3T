import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    minWidth: "initial",
  },
  text: {
    padding: "0px",
    margin: "4px",
  },
});

// 登録画面一覧
export const IconButtonList = ({ index }) => {
  const classes = useStyles();
  return (
    <>
      {index.map((c, i) => {
        return (
          <Button
            key={i}
            classes={{root: classes.root, text: classes.text}}
          >
            <Avatar
              variant="rounded"
              src={`${process.env.PUBLIC_URL}/icon/${c}.png`}
            />
          </Button>
        )
      })}
    </>
  );
}

IconButtonList.propTypes = {
  index: PropTypes.string
}
