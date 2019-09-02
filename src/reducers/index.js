export const initialState = {
    user: 'Alex',
    num: 1,
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'PLUS_ONE':
            return {
                ...state,
                num: state.num + 1,
            };

        default:
            return state;
    }
}
