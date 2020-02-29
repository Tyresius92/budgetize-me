import React from "react";
import { Button } from "@material-ui/core";
import { withFirebase } from "../Firebase";
import useStyles from "../Styles";

const SignOutButton = ({ firebase }) => {
  const classes = useStyles();

  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={firebase.signOut}
    >
      Sign Out
    </Button>
  );
};

export default withFirebase(SignOutButton);
