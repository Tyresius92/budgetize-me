import React, { useState } from "react";
import useStyles from "../Styles";
import { withRouter } from "react-router-dom";
import { Button, FormControl, TextField } from "@material-ui/core";
import { withFirebase } from "../Firebase";
import validator from "validator";
import ROUTES from "../../constants/routes";

const SignInWithEmailAndPasswordForm = ({ firebase, history }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const isEmailValid = () => !emailTouched || validator.isEmail(email);

  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const isPasswordValid = () =>
    !passwordTouched || (password.length >= 8 && password.length <= 20);

  const isSubmitButtonActive = () => isEmailValid() && isPasswordValid();

  const [errorMsg, setErrorMsg] = useState(null);

  const onSubmit = event => {
    event.preventDefault();

    firebase
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setEmailTouched(false);
        setPassword("");
        setPasswordTouched(false);

        history.push(ROUTES.HOME);
      })
      .catch(error => {
        setErrorMsg(error.message);
      });
  };

  return (
    <>
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
          <Button
            className={classes.input}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={!isSubmitButtonActive()}
          >
            Sign In
          </Button>
        </FormControl>
      </form>
      {errorMsg && <p>{errorMsg}</p>}
    </>
  );
};

export default withRouter(withFirebase(SignInWithEmailAndPasswordForm));
