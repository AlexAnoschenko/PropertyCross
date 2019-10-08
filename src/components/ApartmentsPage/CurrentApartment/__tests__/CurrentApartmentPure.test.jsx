import React from 'react';
import { shallow } from 'enzyme';
import CurrentApartmentPure from '../CurrentApartmentPure';

describe('CurrentApartment', () => {
    const currentApartment = {};
    const match = { params: { id: 1, city: 'London' } };

    const getCurrentApartment = jest.fn();
    const addToFavotites = jest.fn();
    const addApartmentToFavorites = jest.fn();
    const wrapper = shallow(
        <CurrentApartmentPure
            getCurrentApartment={getCurrentApartment}
            match={match}
            addToFavotites={addToFavotites}
            currentApartment={currentApartment}
            addApartmentToFavorites={addApartmentToFavorites}
        />
    );

    test('Should have initialState', () => {
        expect(wrapper.state()).toEqual({ currentPage: 1 });
    });

    test('Should be ComponentDidMount', () => {
        expect(getCurrentApartment).toHaveBeenCalledTimes(1);
    });

    test('Should click on button', () => {
        const button = wrapper.find('button');

        button.simulate('click', addToFavotites());
        expect(addToFavotites).toBeCalled();
    });
});
