import { connect } from 'react-redux';
import FavoriteApartmentsPure from './FavoriteApartmentsPure';
import getFavoritesList from '../../actions/getFavoritesList';

const mapStateToProps = (store) => {
    return {
        favorites: store.apartments.favorites,
        locations: store.locations.locationsList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFavoritesList: () => dispatch(getFavoritesList()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteApartmentsPure);
