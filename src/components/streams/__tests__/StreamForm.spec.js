import { shallow} from 'enzyme';
import React from 'react';

import StreamForm from '../StreamForm';
describe('Stream StreamForm test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<StreamForm/>);

    });
});