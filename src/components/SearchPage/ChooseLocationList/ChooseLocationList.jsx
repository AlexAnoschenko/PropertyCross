import { connect } from 'react-redux';
import ChooseLocationListPure from './ChooseLocationListPure';
import getLocationsList from '../../../actions/getLocationsList';

const mapStateToProps = (store) => {
    return {
        locations: store.locations.locationsList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLocationsList: () => dispatch(getLocationsList()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChooseLocationListPure);
