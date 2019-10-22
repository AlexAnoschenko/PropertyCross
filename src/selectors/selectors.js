import { path } from 'ramda'

export const getListings = (store) => {
    return path(['appartments', 'list'], store.apartments);
};

export const getTotalResults = (store) => {
    return path(['appartments', 'total_results'], store.apartments);
};
