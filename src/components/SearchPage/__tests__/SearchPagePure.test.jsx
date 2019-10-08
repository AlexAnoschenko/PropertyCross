import React from 'react';
import { shallow } from 'enzyme';

import SearchPagePure from '../SearchPagePure';
import ErrorRequest from '../ErrorRequest/ErrorRequest';
import ChooseLocationList from '../ChooseLocationList/ChooseLocationList';

describe('SearchPage', () => {
    const getRecentRequests = jest.fn();
    const onSubmitError = jest.fn();
    const onLocationButtonClick = jest.fn();
    const wrapper = shallow(
        <SearchPagePure
            getRecentRequests={getRecentRequests}
            onSubmitError={onSubmitError}
            onLocationButtonClick={onLocationButtonClick}
        />
    );

    test('Should have initialState', () => {
        expect(wrapper.state()).toEqual({ searchPageStatus: 'recentSearchList' });
    });

    test('Should be ComponentDidMount', () => {
        expect(getRecentRequests).toHaveBeenCalledTimes(1);
    });

    test('Should update the state {value} for render ErrorRequest component', () => {
        expect(wrapper.find(ErrorRequest)).toHaveLength(0);
        wrapper.setState({ searchPageStatus: 'errorRequest' });
        expect(wrapper.find(ErrorRequest)).toHaveLength(1);
    });

    test('Should update the state {value} for render ChooseLocationList component', () => {
        expect(wrapper.find(ChooseLocationList)).toHaveLength(0);
        wrapper.setState({ searchPageStatus: 'chooseLocationList' });
        expect(wrapper.find(ChooseLocationList)).toHaveLength(1);
    });
});
