import React, { Component } from 'react';
import {BackTop} from 'antd';
import logo from './logo.svg';
import './style.css';
// import './App.css';
import Header from './template/components/header';
import Footer from './template/components/footer';
import Main from './template/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        <BackTop />
      </div>
    );
  }
}

export default App;
