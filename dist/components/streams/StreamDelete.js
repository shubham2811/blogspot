import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

var StreamDelete =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StreamDelete, _React$Component);

  function StreamDelete() {
    _classCallCheck(this, StreamDelete);

    return _possibleConstructorReturn(this, _getPrototypeOf(StreamDelete).apply(this, arguments));
  }

  _createClass(StreamDelete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var _this = this;

      var id = this.props.match.params.id;
      return React.createElement(React.Fragment, null, React.createElement("button", {
        onClick: function onClick() {
          return _this.props.deleteStream(id);
        },
        className: "ui button negative"
      }, "Delete"), React.createElement(Link, {
        to: "/",
        className: "ui button"
      }, "Cancel"));
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      if (!this.props.stream) {
        return 'Are you sure you want to delete this stream?';
      }

      return "Are you sure you want to delete thi stream with title: ".concat(this.props.stream.title);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Modal, {
        title: "Delete Stream",
        content: this.renderContent(),
        actions: this.renderActions(),
        onDismiss: function onDismiss() {
          return history.push('/');
        }
      });
    }
  }]);

  return StreamDelete;
}(React.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  fetchStream: fetchStream,
  deleteStream: deleteStream
})(StreamDelete);