const initialState = {
    recentRequests: [],
};

export default function recentList(state = initialState, action) {
    switch (action.type) {
        case 'GET_RECENT_REQUESTS':
            return { ...state, recentRequests: action.payload };

        default:
            return state;
    }
}
