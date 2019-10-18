import React, { PureComponent } from 'react';
import pt from 'prop-types';
import styles from './Wrapper.module.css';

export default class Wrapper extends PureComponent {
    render() {
        return <div className={styles.wrapper}>{this.props.children}</div>;
    }
}

Wrapper.propTypes = {
    children: pt.node,
};
