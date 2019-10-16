import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Overview.css';

export default class Overview extends PureComponent {
    render() {
        return (
            <div className={styles.overviewContainer}>
                <div className={styles.upperTextBtn}>
                    <p className={styles.title}>PropertyCross</p>
                    <Link to="/favorites">
                        <button type="button" className={styles.favoriteButton}>
                            Faves
                        </button>
                    </Link>
                </div>

                <span className={styles.infoBlock}>
                    Use the form below to search for houses to buy. You can search by place-name, postcode, or click `My
                    location`, to search in your current location
                </span>
            </div>
        );
    }
}
