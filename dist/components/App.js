import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
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
    }
  }]);

  return App;
}(React.Component);

export default connect()(App);