import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "../Styles";
import { withFirebase } from "../Firebase";
import validator from "validator";
import ROUTES from "../../constants/routes";

const PasswordForgetCard = ({ firebase }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const isEmailValid = () => !emailTouched || validator.isEmail(email);

  const isSubmitButtonActive = () => isEmailValid();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errorMsg, setErrorMsg] = useState(null);

  const onSubmit = event => {
    event.preventDefault();

    firebase
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmail("");
        setEmailTouched("");
        setErrorMsg(null);
        setIsSubmitted(true);
      })
      .catch(err => {
        setErrorMsg(err.message);
      });
  };

  return (
    <Card className={classes.card} raised>
      <CardHeader title="Forgot Password?" />
      {isSubmitted ? (
        <Container className={classes.formControl}>
          <Typography>
            A password reset email has been sent to your email address. Please
            be sure to check the spam filter.
          </Typography>
          <Button
            href={ROUTES.SIGN_IN}
            className={classes.input}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Sign In
          </Button>
        </Container>
      ) : (
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
            <Button
              className={classes.input}
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isSubmitButtonActive()}
            >
              Reset Password
            </Button>
          </FormControl>
        </form>
      )}

      {errorMsg && <p>{errorMsg}</p>}
    </Card>
  );
};

export default withFirebase(PasswordForgetCard);
