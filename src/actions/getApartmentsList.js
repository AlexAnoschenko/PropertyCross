import getApartments from '../services/request/get';

export default function getApartmentsList({ currentPage, city }) {
    return (dispatch) => {
        return getApartments({
            payload: {
                page: currentPage,
                place_name: city,
            },
        }).then((payload) => {
            return dispatch({ type: 'GET_APARTMENTS_SUCCESS', payload });
        });
    };
}
