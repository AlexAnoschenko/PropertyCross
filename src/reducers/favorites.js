const initialState = {
    favorites: [],
};

export default function apartments(state = initialState, action) {
    switch (action.type) {
        case 'ADD_APARTMENTS_TO_FAVORITES':
            return { ...state, favorites: action.payload };

        default:
            return state;
    }
}
