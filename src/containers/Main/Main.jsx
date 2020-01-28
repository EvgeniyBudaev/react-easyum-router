import React from 'react';

import * as classes from './Main.module.scss';

const Main = props => {
  return <main className={classes.Main}>
    {props.children}
  </main>
}

export default Main;