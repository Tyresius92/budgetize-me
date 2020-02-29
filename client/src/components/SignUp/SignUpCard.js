import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "../Styles";
import { withFirebase } from "../Firebase";
import validator from "validator";
import ROUTES from "../../constants/routes";

const SignUpCard = ({ firebase, history }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const isEmailValid = () => !emailTouched || validator.isEmail(email);

  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const isPasswordValid = () =>
    !passwordTouched || (password.length >= 8 && password.length <= 20);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmTouched, setPasswordConfirmTouched] = useState(false);
  const isPasswordConfirmValid = () =>
    !passwordConfirmTouched ||
    (passwordConfirm.length >= 8 &&
      passwordConfirm.length <= 20 &&
      passwordConfirm === password);

  const isSubmitButtonActive = () =>
    isEmailValid() && isPasswordValid() && isPasswordConfirmValid();

  const [errorMsg, setErrorMsg] = useState(null);

  const onSubmit = event => {
    event.preventDefault();

    firebase
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setEmailTouched(false);
        setPassword("");
        setPasswordTouched(false);
        setPasswordConfirm("");
        setPasswordConfirmTouched(false);

        history.push(ROUTES.HOME);
      })
      .catch(error => {
        setErrorMsg(error.message);
      });
  };

  return (
    <Card className={classes.card} raised>
      <CardHeader title="Sign Up" />
      <form onSubmit={onSubmit}>
        <FormControl className={classes.formControl}>
          <TextField
            className={classes.input}
            variant="filled"
            margin="dense"
            label="Email Address"
            placeholder="hamlet@elsinore.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={!isEmailValid()}
            helperText={isEmailValid() ? "" : "Please enter a valid email"}
            onBlur={() => setEmailTouched(true)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            className={classes.input}
            variant="filled"
            margin="dense"
            type="password"
            label="Password"
            placeholder="Enter a password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={!isPasswordValid()}
            helperText={
              isPasswordValid() ? "" : "Please enter a valid password"
            }
            onBlur={() => setPasswordTouched(true)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            className={classes.input}
            variant="filled"
            margin="dense"
            type="password"
            label="Confirm Password"
            placeholder="Enter your password again"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            error={!isPasswordConfirmValid()}
            helperText={
              isPasswordConfirmValid() ? "" : "Please enter a valid password"
            }
            onBlur={() => setPasswordConfirmTouched(true)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button
            className={classes.input}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={!isSubmitButtonActive()}
          >
            Sign Up
          </Button>
        </FormControl>
      </form>
      {errorMsg && <p>{errorMsg}</p>}
      <Typography>
        Already have an account? <Link to={ROUTES.SIGN_IN}>Sign in here</Link>
      </Typography>
    </Card>
  );
};

SignUpCard.propTypes = {
  firebase: PropTypes.shape({
    createUserWithEmailAndPassword: PropTypes.func.isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(withFirebase(SignUpCard));
