import { requestsRecentKey } from '../../constants/recentRequest';

export default function setLocalStorage(recent) {
    return Promise.resolve(localStorage.setItem(requestsRecentKey, recent));
}
