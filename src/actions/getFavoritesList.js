import getLocalStorageData from '../services/localStorage/getLocalStorageData';

export default function getFavoritesList() {
    return (dispatch) => {
        return getLocalStorageData('favorites').then((payload) => {
            return dispatch({
                type: 'ADD_APARTMENTS_TO_FAVORITES',
                payload,
            });
        });
    };
}
