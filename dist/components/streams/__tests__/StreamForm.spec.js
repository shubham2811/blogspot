import { shallow } from 'enzyme';
import React from 'react';
import StreamForm from '../StreamForm';
describe('Stream StreamForm test with Enzyme', function () {
  it('renders without crashing', function () {
    shallow(React.createElement(StreamForm, null));
  });
});