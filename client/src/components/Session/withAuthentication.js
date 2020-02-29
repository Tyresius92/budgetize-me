import React from "react";
import AuthUserContext from "./context";

export const withAuthentication = Component => props => (
  <AuthUserContext.Consumer>
    {authUser => <Component {...props} authUser={authUser} />}
  </AuthUserContext.Consumer>
);

export default withAuthentication;
