import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

var Header = function Header() {
  return React.createElement("div", {
    className: "ui secondary pointing menu"
  }, React.createElement(Link, {
    to: "/",
    className: "item"
  }, "Streamer"), React.createElement("div", {
    className: "right menu"
  }, React.createElement(Link, {
    to: "/",
    className: "item"
  }, "All Streames"), React.createElement(GoogleAuth, null)));
};

export default Header;