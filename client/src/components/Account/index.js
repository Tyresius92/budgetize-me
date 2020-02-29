import React from "react";
import { withAuthorization } from "../Session";

const Account = ({ authUser }) => (
  <div>
    <h1>Account: {authUser.email}</h1>
    <p>
      {console.log(
        authUser.getIdToken(true).then(idToken => {
          console.log(idToken);
          return JSON.stringify(idToken);
        })
      )}
    </p>
  </div>
);

const authorizationCondition = authUser => !!authUser;

export default withAuthorization(authorizationCondition)(Account);
