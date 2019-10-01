import { connect } from 'react-redux';
import CurrentApartmentPure from './CurrentApartmentPure';
import addApartmentToFavorites from '../../../actions/addApartmentToFavorites';
import getApartmentsList from '../../../actions/getApartmentsList';
import getCurrentApartment from '../../../actions/getCurrentApartment';

const mapStateToProps = (store) => {
    return {
        currentApartment: store.apartments.currentApartment,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addApartmentToFavorites: (key, payload) => dispatch(addApartmentToFavorites(key, payload)),
        getApartmentsList: (payload) => dispatch(getApartmentsList(payload)),
        getCurrentApartment: (props) => dispatch(getCurrentApartment(props)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentApartmentPure);
