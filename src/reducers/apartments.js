import pathOr from 'ramda/src/pathOr';

export default function apartments(state = {}, action) {
    switch (action.type) {
        case 'APARTMENTS_UPDATE':
            const { payload } = action;

            return {
                ...state,
                appartments: {
                    ...payload,
                    list: [...pathOr([], ['appartments', 'list'], state), ...payload.listings],
                },
            };

        case 'CURRENT_APARTMENT_LOADED':
            return { ...state, currentApartment: action.payload };

        default:
            return state;
    }
}
