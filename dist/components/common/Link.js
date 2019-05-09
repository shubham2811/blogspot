import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
var STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
};

var Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this));

    _this._onMouseEnter = function () {
      _this.setState({
        class: STATUS.HOVERED
      });
    };

    _this._onMouseLeave = function () {
      _this.setState({
        class: STATUS.NORMAL
      });
    };

    _this.state = {
      class: STATUS.NORMAL
    };
    return _this;
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      return React.createElement("a", {
        className: this.state.class,
        href: this.props.page || '#',
        onMouseEnter: this._onMouseEnter,
        onMouseLeave: this._onMouseLeave
      }, this.props.children);
    }
  }]);

  return Link;
}(React.Component);

export { Link as default };