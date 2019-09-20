import { connect } from 'react-redux';
import SearchPagePure from './SearchPagePure';
import getRecentRequests from '../../actions/getRecentRequests';
import getApartmentsList from '../../actions/getApartmentsList';
import updateRecentSearch from '../../actions/updateRecentSearch';

const mapStateToProps = (store) => {
    return {
        recentRequests: store.recentList.recentRequests,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getApartmentsList: (payload) => dispatch(getApartmentsList(payload)),
        getRecentRequests: (key) => dispatch(getRecentRequests(key)),
        updateRecentSearch: (key, recent) => dispatch(updateRecentSearch(key, recent)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPagePure);
