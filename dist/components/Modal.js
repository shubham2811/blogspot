import React from 'react';
import ReactDOM from 'react-dom';

var Modal = function Modal(props) {
  return ReactDOM.createPortal(React.createElement("div", {
    onClick: props.onDismiss,
    className: "ui dimmer modals visible active"
  }, React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: "ui standard modal visible active"
  }, React.createElement("div", {
    className: "header"
  }, props.title), React.createElement("div", {
    className: "content"
  }, props.content), React.createElement("div", {
    className: "actions"
  }, props.actions))), document.querySelector('#modal'));
};

export default Modal;