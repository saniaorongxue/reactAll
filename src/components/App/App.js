import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import Login from '../Login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
       App
        <Button type="danger">danger</Button>
        <Button type="primary">danger</Button>
        <Icon type="radius-setting" />
        <Login />
      </div>
    );
  }
}

export default App;
