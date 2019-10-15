const initialState = {
    locationsList: [],
};

export default function locations(state = initialState, action) {
    switch (action.type) {
        case 'GET_LOCATIONS_SUCCESS':
            return { ...state, locationsList: action.payload };

        default:
            return state;
    }
}
