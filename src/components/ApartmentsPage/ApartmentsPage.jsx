import { connect } from 'react-redux';
import ApartmentsPagePure from './ApartmentsPagePure';
import getApartmentsList from '../../actions/getApartmentsList';

const mapStateToProps = (store) => {
    return {
        apartments: store.apartments.listings,
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
