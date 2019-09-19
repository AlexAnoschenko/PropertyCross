const initialState = {};

export default function apartments(state = initialState, action) {
    switch (action.type) {
        case 'GET_DATA_SUCCESS':
            if (state.listings) {
                return { ...state, listings: [...state.listings, ...action.payload] };
            }
            return { ...state, listings: action.payload };

        default:
            return state;
    }
}
