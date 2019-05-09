import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

var StreamCreate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StreamCreate, _React$Component);

  function StreamCreate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StreamCreate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StreamCreate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onSubmit = function (formValues) {
      _this.props.createStream(formValues); // console.log("formValues", formValues);

    };

    return _this;
  }

  _createClass(StreamCreate, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h3", null, "Create a Stream"), React.createElement(StreamForm, {
        onSubmit: this.onSubmit
      }));
    }
  }]);

  return StreamCreate;
}(React.Component);

export default connect(null, {
  createStream: createStream
})(StreamCreate);