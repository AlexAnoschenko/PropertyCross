import getLocalStorageData from '../services/localStorage/getLocalStorageData';
import { requestsRecentKey } from '../constants/recentRequest';

export default function getRecentRequests() {
    return (dispatch) => {
        return getLocalStorageData(requestsRecentKey).then((payload) => {
            return dispatch({ type: 'GET_RECENT_REQUESTS', payload });
        });
    };
}
