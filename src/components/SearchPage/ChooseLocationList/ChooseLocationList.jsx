import React, { PureComponent } from 'react';
import styles from './ChooseLocationList.css';

export default class ChooseLocationList extends PureComponent {
    render() {
        return <p className={styles.locationListText}>Please select a location below:</p>;
    }
}
