
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/redux/store/Store';
import LoginRouter from './src/components/login/LoginRouter';
import Main from './src/components/main/Main';
import HomeRouter from './src/components/home/HomeRouter';
import Reply from './src/components/reply/Reply';
import JobList from './src/components/joblist/JobList';

export default class Friendzone extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Friendzone', () => Friendzone);
