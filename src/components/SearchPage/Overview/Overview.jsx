import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Overview.css';

export default class Overview extends PureComponent {
    render() {
        return (
            <div className={styles.overviewContainer}>
                <span>
                    Use the form below to search for houses to buy. You can search by place-name, postcode, or click `My
                    location`, to search in your current location
                </span>
                <Link to="/favorites">
                    <button type="button" className={styles.favoriteButton}>
                        Favorites
                    </button>
                </Link>
            </div>
        );
    }
}
