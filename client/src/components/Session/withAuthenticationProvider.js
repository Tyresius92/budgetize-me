import React from "react";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";

const withAuthenticationProvider = Component => {
  class AuthenticationProvider extends React.Component {
    state = {
      authUser: JSON.parse(localStorage.getItem("authUser")),
    };

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.setState({ authUser });
        } else {
          localStorage.removeItem("authUser");
          this.setState({ authUser: null });
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(AuthenticationProvider);
};

export default withAuthenticationProvider;
