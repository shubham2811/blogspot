import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

var GoogleAuth =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GoogleAuth, _React$Component);

  function GoogleAuth() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GoogleAuth);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GoogleAuth)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onAuthChange = function (isSignedIn) {
      if (isSignedIn) {
        _this.props.signIn(_this.auth.currentUser.get().getId());
      } else {
        _this.props.signOut();
      }
    };

    _this.onSignOutClick = function () {
      _this.auth.signOut();
    };

    _this.onSignInClick = function () {
      _this.auth.signIn();
    };

    return _this;
  }

  _createClass(GoogleAuth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.gapi.load('client:auth2', function () {
        window.gapi.client.init({
          clientId: '118111262691-pq45bsc91vitagohv9b2b75c0vqsenib.apps.googleusercontent.com',
          scope: 'email'
        }).then(function () {
          _this2.auth = window.gapi.auth2.getAuthInstance();

          _this2.onAuthChange(_this2.auth.isSignedIn.get());

          _this2.auth.isSignedIn.listen(_this2.onAuthChange);
        });
      });
    }
  }, {
    key: "renderAuthButton",
    value: function renderAuthButton() {
      if (this.props.isSignedIn == null) {
        return null;
      } else if (this.props.isSignedIn) {
        return React.createElement("button", {
          onClick: this.onSignOutClick,
          className: "ui red google button"
        }, React.createElement("i", {
          className: "google icon"
        }), "SignOut");
      } else {
        return React.createElement("button", {
          onClick: this.onSignInClick,
          className: "ui red google button"
        }, React.createElement("i", {
          className: "google icon"
        }), "Sign In with Google");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.renderAuthButton());
    }
  }]);

  return GoogleAuth;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {
  signIn: signIn,
  signOut: signOut
})(GoogleAuth);