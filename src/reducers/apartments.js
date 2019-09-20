const initialState = {};

export default function apartments(state = initialState, action) {
    switch (action.type) {
        case 'GET_DATA_SUCCESS':
            return { ...state, listings: action.payload };

        default:
            return state;
    }
}
