import getId from '../utils/getId';
import getApartments from '../services/request/get';

export default function getCurrentApartment(props) {
    const { id, city, page } = props;

    return (dispatch) => {
        return getApartments({
            payload: {
                page,
                place_name: city,
            },
        }).then((data) => {
            const apartment = data.response.listings.find((apart) => getId(apart.latitude) === id);

            if (!apartment) {
                return dispatch(getCurrentApartment({ id, city, page: page + 1 }));
            }

            return dispatch({ type: 'CURRENT_APARTMENT_LOADED', payload: apartment });
        });
    };
}
