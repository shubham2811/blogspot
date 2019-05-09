import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

var StreamList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StreamList, _React$Component);

  function StreamList() {
    _classCallCheck(this, StreamList);

    return _possibleConstructorReturn(this, _getPrototypeOf(StreamList).apply(this, arguments));
  }

  _createClass(StreamList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchStreams();
    }
  }, {
    key: "renderCreate",
    value: function renderCreate() {
      if (this.props.isSignedIn) {
        return React.createElement("div", {
          style: {
            textAlign: 'right'
          }
        }, React.createElement(Link, {
          to: "/streams/new",
          className: "ui button primary"
        }, "Create Stream"));
      }
    } //Helper Method

  }, {
    key: "renderAdmin",
    value: function renderAdmin(stream) {
      if (stream.userId === this.props.currentUserId) {
        return React.createElement("div", {
          className: "right floated content"
        }, React.createElement(Link, {
          to: "/streams/edit/".concat(stream.id),
          className: "ui button primary"
        }, "Edit"), React.createElement(Link, {
          to: "/streams/delete/".concat(stream.id),
          className: "ui button negative"
        }, "Delete"));
      }
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this = this;

      return this.props.streams.map(function (stream) {
        return React.createElement("div", {
          className: "item",
          key: stream.id
        }, _this.renderAdmin(stream), React.createElement("i", {
          className: "large middle aligned icon camera"
        }), React.createElement("div", {
          className: "content"
        }, React.createElement(Link, {
          to: "/streams/".concat(stream.id)
        }, " ", stream.title), React.createElement("div", {
          className: "description"
        }, stream.description)));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h2", null, "Streams"), React.createElement("div", {
        className: "ui celled list"
      }, this.renderList()), this.renderCreate());
    }
  }]);

  return StreamList;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  // console.log(state.streams)
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {
  fetchStreams: fetchStreams
})(StreamList);