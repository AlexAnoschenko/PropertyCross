import React, { PureComponent } from 'react';
import pt from 'prop-types';
import styles from './Apartment.css';

export default class Apartment extends PureComponent {
    render() {
        const { img_url: imgUrl, price_formatted: priceFormatted, title } = this.props.apartment;

        return (
            <div className={styles.container}>
                <img src={imgUrl} alt="" className={styles.image} />
                <div className={styles.infoContainer}>
                    <p className={styles.price}>{priceFormatted}</p>
                    <p className={styles.title}>{title}</p>
                </div>
            </div>
        );
    }
}

Apartment.propTypes = {
    apartment: pt.object,
};
