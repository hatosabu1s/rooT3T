import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    minWidth: "initial",
  },
  text: {
    padding: "0px",
    margin: "4px",
  },
  icon: {
    opacity: 0.85
  },
  checked: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0.5,
    color: "white",
    backgroundColor: "black"
  },
});

// 登録画面一覧
export const IconButtonList = ({ index, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles();

  const onClickIcon = (index) => {
    if (selectedIndex && selectedIndex.includes(index)) {
      const cutIndex = selectedIndex.filter((item) => item !== index);
      setSelectedIndex(cutIndex);
    } else {
      setSelectedIndex(selectedIndex => [...selectedIndex, index]);
    }
  }

  return (
    <>
      {index.map((c, i) => {
        return (
          <Button
            key={i}
            classes={{ root: classes.root, text: classes.text }}
            onClick={() => onClickIcon(i)}
          >
            {selectedIndex && selectedIndex.includes(i) &&
              <CheckCircleIcon
                classes={{ root: classes.checked }}
              />
            }
            <Avatar
              variant="rounded"
              src={`${process.env.PUBLIC_URL}/icon/${c}.png`}
              classes={{ root: classes.icon }}
            />
          </Button>
        )
      })}
    </>
  );
}

IconButtonList.propTypes = {
  index: PropTypes.array.isRequired,
  selectedIndex: PropTypes.array.isRequired,
  setSelectedIndex: PropTypes.func.isRequired
}
