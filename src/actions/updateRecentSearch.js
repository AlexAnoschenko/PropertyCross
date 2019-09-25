import getLocalStorageData from '../services/localStorage/getLocalStorageData';
import setLocalStorage from '../services/localStorage/setLocalStorageData';

export default function updateRecentSearch(key, recent) {
    return (dispatch) => {
        return setLocalStorage(key, recent).then(() => {
            return getLocalStorageData(key).then((payload) => {
                return dispatch({ type: 'GET_RECENT_REQUESTS', payload });
            });
        });
    };
}
