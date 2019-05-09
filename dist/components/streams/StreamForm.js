import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { Field, reduxForm } from 'redux-form';

var StreamForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StreamForm, _React$Component);

  function StreamForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StreamForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StreamForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderInput = function (_ref) {
      var input = _ref.input,
          label = _ref.label,
          meta = _ref.meta;
      var className = "field ".concat(meta.error && meta.touched ? 'error' : '');
      return React.createElement("div", {
        className: className
      }, React.createElement("label", null, label), React.createElement("input", Object.assign({}, input, {
        autoComplete: "off"
      })), _this.renderError(meta));
    };

    _this.onSubmit = function (formValues) {
      _this.props.onSubmit(formValues); // console.log("formValues", formValues);

    };

    return _this;
  }

  _createClass(StreamForm, [{
    key: "renderError",
    value: function renderError(_ref2) {
      var error = _ref2.error,
          touched = _ref2.touched;

      if (touched && error) {
        return React.createElement("div", {
          className: "ui error message"
        }, React.createElement("div", {
          className: "header"
        }, error));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        className: "ui form error",
        onSubmit: this.props.handleSubmit(this.onSubmit)
      }, React.createElement(Field, {
        name: "title",
        component: this.renderInput,
        label: "Enter title"
      }), React.createElement(Field, {
        name: "description",
        component: this.renderInput,
        label: "Enter Description"
      }), React.createElement("button", {
        className: "ui button primary"
      }, "Submit"));
    }
  }]);

  return StreamForm;
}(React.Component);

var validate = function validate(formValues) {
  var errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm);