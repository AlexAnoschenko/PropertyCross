const initialState = {};

export default function apartments(state = initialState, action) {
    switch (action.type) {
        case 'GET_APARTMENTS_SUCCESS':
            if (state.listings) {
                return { ...state, listings: [...state.listings, ...action.payload] };
            }
            return { ...state, listings: action.payload };

        case 'ADD_APARTMENTS_TO_FAVORITES':
            return { ...state, favorites: action.payload };

        case 'GET_CURRENT_APARTMENT':
            return { ...state, currentApartment: action.payload };

        default:
            return state;
    }
}
