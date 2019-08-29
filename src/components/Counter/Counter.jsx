import { connect } from 'react-redux';
import CounterPure from './CounterPure';
import { plusOne } from '../../actions/index';

const mapStateToProps = (store) => {
    return {
        user: store.user,
        num: store.num,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        plusOne: () => dispatch(plusOne()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterPure);
