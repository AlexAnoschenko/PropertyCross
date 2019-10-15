import getApartments from '../services/request/get';
import getCoordinates from '../services/getCoordinates/getCoordinates';

export default function getLocationsList() {
    return (dispatch) => {
        getCoordinates().then((position) => {
            const { latitude, longitude } = position.coords;

            return getApartments({
                payload: {
                    centre_point: `${latitude.toFixed(6)},${longitude.toFixed(6)},99km`,
                },
            })
                .then((payload) => {
                    if (payload.response.locations) {
                        dispatch({ type: 'GET_LOCATIONS_SUCCESS', payload: payload.response.locations });
                    }
                    throw new Error();
                })
                .catch(() => {
                    return getApartments({
                        payload: {
                            centre_point: '51.509865,-0.118092,99km',
                        },
                    }).then((payload) => {
                        dispatch({ type: 'GET_LOCATIONS_SUCCESS', payload: payload.response.locations });
                    });
                });
        });
    };
}
