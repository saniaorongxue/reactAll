import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/'
class App extends Component {
  render() {
    return (
      <div className="App">
       App
        <Button type="danger">danger</Button>
        <Button type="primary">danger</Button>
      </div>
    );
  }
}

export default App;
