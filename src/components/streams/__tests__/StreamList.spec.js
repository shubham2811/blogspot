import { shallow} from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux'
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { streams } from '../../../apis/streams';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import StreamList from '../StreamList';
import * as actions from '../../../actions/index';
import * as types from '../../../actions/types';

const mockStore = configureStore([thunk])
const initialState = {
    "streams":[],
    "auth":{}
   
}
describe('Stream StreamList test with Enzyme', () => {
const store = mockStore(initialState)
  const wrapper = shallow(<StreamList store={store} /> )  

    it('---1---render stream List component initially', () => {
        // expect(wrapper).toEqual({})
        expect(toJson(wrapper)).toMatchSnapshot()
     });


      xit('--2-- dispatching the actions', () => {
        const streams =  [
            {
                "title": "a",
                "description": "a",
                "userId": "118440351538142376154",
                "id": 1
              }
          ]
          const expectedActions = {
            type: types.FETCH_STREAMS,
            payload: streams
          }

          const getActions = store.getActions()
          return store.dispatch(actions.fetchStreams()).then(() => {
            // return of async actions
            expect(getActions[0]).toEqual(expectedActions)
          })
      })
})