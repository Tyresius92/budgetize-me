import React from "react";
import { withAuthorization } from "../Session";

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const authorizationCondition = authUser => !!authUser;

export default withAuthorization(authorizationCondition)(Home);
