import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
var INITIAL_STATE = {};
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SIGN_IN':
      return _objectSpread({}, state, {
        isSignedIn: true,
        userId: action.payload
      });

    case 'SIGN_OUT':
      return _objectSpread({}, state, {
        isSignedIn: false,
        userId: null
      });

    default:
      return state;
  }
});