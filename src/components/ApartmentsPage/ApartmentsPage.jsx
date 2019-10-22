import { connect } from 'react-redux';
import ApartmentsPagePure from './ApartmentsPagePure';
import getApartmentsList from '../../actions/getApartmentsList';
import { getListings, getTotalResults } from '../../selectors/selectors';

const mapStateToProps = (store) => {
    return {
        apartments: getListings(store),
        totalResults: getTotalResults(store),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getApartmentsList: (payload) => dispatch(getApartmentsList(payload)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApartmentsPagePure);
