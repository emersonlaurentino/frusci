import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '~/views/containers/main';

const Application = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route pattern="/" component={Main} />
    </BrowserRouter>
  </Provider>
);

Application.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Application;
