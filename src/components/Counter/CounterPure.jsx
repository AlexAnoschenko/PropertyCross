import React, { PureComponent } from 'react';
import pt from 'prop-types';
import styles './Counter.css';

export default class CounterPure extends PureComponent {
    render() {
        return (
            <div className={styles.counter-block}>
                <input type="text" value={this.props.num} />
                <input type="button" value="Go!" onClick={this.props.plusOne} />
                <input type="text" value={this.props.user} />
            </div>
        );
    }
}

CounterPure.propTypes = {
    num: pt.number,
    plusOne: pt.func,
    user: pt.string,
};
