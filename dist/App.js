import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import StreamList from './components/StreamList';
import StreamShow from './components/StreamShow';

function App() {
  return React.createElement("div", {
    className: "App"
  }, React.createElement(BrowserRouter, null, React.createElement(Link, {
    to: "/streamShow"
  }, "to Stream Show"), React.createElement(Link, {
    to: "/"
  }, "to Stream List"), React.createElement(Switch, null, React.createElement(Route, {
    exact: true,
    path: "/",
    component: StreamList
  }), React.createElement(Route, {
    exact: true,
    path: "/streamShow",
    component: StreamShow
  }))));
}

export default App;