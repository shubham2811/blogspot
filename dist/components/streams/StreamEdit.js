import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

var StreamEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StreamEdit, _React$Component);

  function StreamEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StreamEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StreamEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onSubmit = function (formValues) {
      _this.props.editStream(_this.props.match.params.id, formValues);
    };

    return _this;
  }

  _createClass(StreamEdit, [{
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

      return React.createElement("div", null, React.createElement("h3", null, "Edit a Stream"), React.createElement(StreamForm, {
        initialValues: _.pick(this.props.stream, 'title', 'description'),
        onSubmit: this.onSubmit
      }));
    }
  }]);

  return StreamEdit;
}(React.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  fetchStream: fetchStream,
  editStream: editStream
})(StreamEdit);