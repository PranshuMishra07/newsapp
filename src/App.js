import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import Landing from './Component/Landing'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="Container">
        <BrowserRouter >
          <Landing />
        </BrowserRouter>
      </div>
    )
  }
}
