import _regeneratorRuntime from "@babel/runtime/regenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from './types';
import history from '../history';
export var signIn = function signIn(userId) {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
export var signOut = function signOut() {
  return {
    type: SIGN_OUT
  };
};
export var createStream = function createStream(formValues) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var userId, response;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = getState().auth.userId;
                _context.next = 3;
                return streams.post('/streams', _objectSpread({}, formValues, {
                  userId: userId
                }));

              case 3:
                response = _context.sent;
                dispatch({
                  type: CREATE_STREAM,
                  payload: response.data
                });
                history.push('/');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
export var fetchStreams = function fetchStreams() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2(dispatch) {
        var response;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return streams.get('/streams');

              case 2:
                response = _context2.sent;
                dispatch({
                  type: FETCH_STREAMS,
                  payload: response.data
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
export var fetchStream = function fetchStream(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee3(dispatch) {
        var response;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return streams.get("/streams/".concat(id));

              case 2:
                response = _context3.sent;
                dispatch({
                  type: FETCH_STREAM,
                  payload: response.data
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
export var editStream = function editStream(id, formValues) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee4(dispatch) {
        var response;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return streams.patch("/streams/".concat(id), formValues);

              case 2:
                response = _context4.sent;
                dispatch({
                  type: EDIT_STREAM,
                  payload: response.data
                });
                history.push('/');

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
export var deleteStream = function deleteStream(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee5(dispatch) {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return streams.delete("/streams/".concat(id));

              case 2:
                dispatch({
                  type: DELETE_STREAM,
                  payload: id
                });
                history.push('/');

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x6) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};