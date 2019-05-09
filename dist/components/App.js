import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

var App = function App() {
  return React.createElement("div", {
    className: "ui container"
  }, React.createElement(Router, {
    history: history
  }, React.createElement("div", null, React.createElement(Header, null), React.createElement(Switch, null, React.createElement(Route, {
    path: "/",
    exact: true,
    component: StreamList
  }), React.createElement(Route, {
    path: "/streams/new",
    exact: true,
    component: StreamCreate
  }), React.createElement(Route, {
    path: "/streams/edit/:id",
    exact: true,
    component: StreamEdit
  }), React.createElement(Route, {
    path: "/streams/delete/:id",
    exact: true,
    component: StreamDelete
  }), React.createElement(Route, {
    path: "/streams/:id",
    exact: true,
    component: StreamShow
  })))));
};

export default App;