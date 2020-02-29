import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { Card, CardHeader, Typography } from "@material-ui/core";
import SignInWithEmailAndPasswordForm from "./SignInWithEmailAndPasswordForm";
import SignInWithGoogle from "./SignInWithGoogle";
import useStyles from "../Styles";
import ROUTES from "../../constants/routes";

const SignInCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} raised>
      <CardHeader title="Sign In" />
      <SignInWithEmailAndPasswordForm />

      <SignInWithGoogle />
      <Typography>
        Forgot password? <Link to={ROUTES.PASSWORD_FORGET}>Reset Password</Link>
      </Typography>
      <Typography>
        No account yet? <Link to={ROUTES.SIGN_UP}>Create one here</Link>
      </Typography>
    </Card>
  );
};

SignInCard.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SignInCard);
