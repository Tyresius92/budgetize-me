import React from "react";
import { Link } from "react-router-dom";
import { withAuthentication } from "../Session";
import SignOutButton from "../SignOut";

import ROUTES from "../../constants/routes";

const Navigation = ({ authUser }) => (
  <>
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
  </>
);

const NavigationAuth = () => (
  <>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
    <SignOutButton />
  </>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default withAuthentication(Navigation);
