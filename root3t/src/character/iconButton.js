import React from "react";
import { Avatar, Button } from "@material-ui/core";

import { NomalIndex } from "./constants";

export const IconButtonList = () => {
  return (
    <>
      {NomalIndex.map((c, i) => {
        return (
          <Button
            key={i}
            startIcon={
              <Avatar
                variant="rounded"
                src={`${process.env.PUBLIC_URL}/icon/${c}.png`}
              />
            }
          />
        )
      })}
    </>
  );
}
