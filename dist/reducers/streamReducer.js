import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _ from 'lodash';
import { CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from '../actions/types';
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FETCH_STREAM:
      return _objectSpread({}, state, _defineProperty({}, action.payload.id, action.payload));

    case CREATE_STREAM:
      return _objectSpread({}, state, _defineProperty({}, action.payload.id, action.payload));

    case EDIT_STREAM:
      return _objectSpread({}, state, _defineProperty({}, action.payload.id, action.payload));

    case DELETE_STREAM:
      return _.omit(state, action.payload);

    case FETCH_STREAMS:
      return _objectSpread({}, state, _.mapKeys(action.payload, 'id'));

    default:
      return state;
  }
});