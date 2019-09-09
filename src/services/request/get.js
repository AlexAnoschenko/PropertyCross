const url = 'https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api';

const initialParams = {
    country: 'uk',
    pretty: 1,
    action: 'search_listings',
    encoding: 'json',
    listing_type: 'buy',
};

const createUrlParams = (obj) => {
    const paramsUrl = Object.keys(obj).map((key) => {
        return `${key}=${obj[key]}&`;
    });

    return `?${paramsUrl.join('')}`;
};

export default function getApartments({ payload }) {
    return fetch(url + createUrlParams({ ...initialParams, ...payload }))
        .then((responce) => {
            return responce.json();
        })
        .then((listing) => {
            return listing.response.listings;
        });
}
