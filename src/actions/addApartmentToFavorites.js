import getLocalStorageData from '../services/localStorage/getLocalStorageData';
import setLocalStorage from '../services/localStorage/setLocalStorageData';

export default function addApartmentToFavorites(payload) {
    return (dispatch) => {
        return getLocalStorageData('favorites').then((apartments) => {
            setLocalStorage('favorites', [...apartments, payload]);
            return dispatch({
                type: 'ADD_APARTMENTS_TO_FAVORITES',
                payload: [...apartments, payload],
            });
        });
    };
}
