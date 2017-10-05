import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '~/views/containers/screens/home';
import NotFound from '~/views/containers/screens/not-found';
import styles from './main.less';

const Main = () => (
  <div className={styles.main}>
    <div className={styles.container}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

export default Main;
