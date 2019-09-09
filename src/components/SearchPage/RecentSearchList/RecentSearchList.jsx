import { connect } from 'react-redux';
import RecentSearchListPure from './RecentSearchListPure';

const mapStateToProps = (store) => {
    return {
        recentRequests: store.recentList.recentRequests,
    };
};

export default connect(mapStateToProps)(RecentSearchListPure);
