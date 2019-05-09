import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

var StreamShow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StreamShow, _React$Component);

  function StreamShow() {
    _classCallCheck(this, StreamShow);

    return _possibleConstructorReturn(this, _getPrototypeOf(StreamShow).apply(this, arguments));
  }

  _createClass(StreamShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.stream) {
        return React.createElement("div", null, "Loading...");
      }

      return React.createElement("div", null, React.createElement("h1", null, this.props.stream.title), React.createElement("h5", null, this.props.stream.description));
    }
  }]);

  return StreamShow;
}(React.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  fetchStream: fetchStream
})(StreamShow);