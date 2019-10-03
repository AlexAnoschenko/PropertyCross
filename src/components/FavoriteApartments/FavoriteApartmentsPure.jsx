import React, { PureComponent } from 'react';
import pt from 'prop-types';
import styles from './FavoriteApartments.css';
import Apartment from '../ApartmentsPage/Apartment/Apartment';

export default class FavoriteApartmentsPure extends PureComponent {
    componentDidMount() {
        this.props.getFavoritesList();
    }

    render() {
        const { favorites } = this.props;

        if (favorites.length === 0) {
            return <>You have not added any properties to your favourites</>;
        }
        return (
            <div className={styles.container}>
                {favorites.map((apartment) => {
                    return <Apartment apartment={apartment} key={apartment.lister_url} />;
                })}
            </div>
        );
    }
}

FavoriteApartmentsPure.propTypes = {
    favorites: pt.array,
    getFavoritesList: pt.func,
};
