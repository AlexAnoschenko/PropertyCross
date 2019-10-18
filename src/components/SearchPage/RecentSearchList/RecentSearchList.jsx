import { connect } from 'react-redux';
import RecentSearchListPure from './RecentSearchListPure';
import updateRecentSearch from '../../../actions/updateRecentSearch';

const mapStateToProps = (store) => {
    return {
        recentRequests: store.recentList.recentRequests,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateRecentSearch: (key, recent) => dispatch(updateRecentSearch(key, recent)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecentSearchListPure);
