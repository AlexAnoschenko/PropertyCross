import React from 'react';
import { shallow } from 'enzyme';

import InputAdressPure from '../InputAdressPure';

describe('SearchPage', () => {
    const wrapper = shallow(<InputAdressPure />);

    test('Should have initialState', () => {
        expect(wrapper.state()).toEqual({ inputText: '' });
    });

    test('Should update the state {value} from empty to London', () => {
        expect(wrapper.state('inputText')).toEqual('');
        wrapper.find('input').simulate('change', { target: { value: 'London' } });
        expect(wrapper.state('inputText')).toEqual('London');
    });
});
