import React, { PureComponent } from 'react';
import pt from 'prop-types';
import styles from './ErrorRequest.css';

export default class ErrorRequest extends PureComponent {
    render() {
        const { error } = this.props;

        return <p className={styles.errorText}>{error}</p>;
    }
}

ErrorRequest.propTypes = {
    error: pt.string,
};
