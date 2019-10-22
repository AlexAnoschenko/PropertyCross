import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import pt from 'prop-types';
import styles from './Apartment.css';
import getId from '../../../utils/getId';

export default class Apartment extends PureComponent {
    render() {
        const { img_url: imgUrl, price_formatted: priceFormatted, title, latitude, city } = this.props.apartment;

        return (
            <Link
                className={styles.link}
                to={`/results/${this.props.city ? this.props.city : city}/${getId(latitude)}`}
            >
                <div className={styles.container}>
                    <img src={imgUrl} alt="" className={styles.image} />
                    <div className={styles.infoContainer}>
                        <p className={styles.price}>{priceFormatted}</p>
                        <p className={styles.title}>{title}</p>
                    </div>
                </div>
            </Link>
        );
    }
}

Apartment.propTypes = {
    apartment: pt.object,
    city: pt.string,
};
