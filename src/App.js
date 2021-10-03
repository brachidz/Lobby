import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/staticStore';
import Information from './components/InformationTemp';
import Favicon from 'react-favicon'

import { Helmet } from "react-helmet";




import './App.css';


function App() {
  return (
    <Provider store={store}>
      {/* 
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Le Apps</title>
        <link
          href="https://en.wikipedia.org/wiki/Apis_florea#/media/File:Apis_florea_worker_1.jpg'" />
      </Helmet> */}
      {/* <ProtectedRoute component={Information} /> */}
      {/* <ProtectedRoute path={"/:userName"} component={Information} /> */}
      <Information></Information>

      {/* <Favicon url={''} /> */}

    </Provider>
  );
}
export default App;
