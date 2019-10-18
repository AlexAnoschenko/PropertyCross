import React, { PureComponent } from 'react';
import pt from 'prop-types';
import styles from './ErrorRequest.css';

export default class ErrorRequest extends PureComponent {
    render() {
        const { error } = this.props;

        return (
            <div className={styles.container}>
                <p className={styles.errorText}>{error}</p>
            </div>
        );
    }
}

ErrorRequest.propTypes = {
    error: pt.string,
};
