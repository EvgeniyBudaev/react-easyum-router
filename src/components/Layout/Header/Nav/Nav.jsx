import React from "react";
import { NavLink } from "react-router-dom";

import * as classes from "./Nav.module.scss";

import { ROUTES } from "../../../../util/routes";

const Nav = props => {
  return (
    <div className={classes.Nav}>
      <NavLink
        to={ROUTES.HOME}
        exact
        activeClassName={classes.active}
        className={classes.link}
      >
        HOME
      </NavLink>
      <NavLink
        to={ROUTES.ABOUT}
        exact
        activeClassName={classes.active}
        className={classes.link}
      >
        ABOUT
      </NavLink>
    </div>
  );
};

export default Nav;
