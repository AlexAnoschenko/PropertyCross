import React, { PureComponent } from 'react';
import pt from 'prop-types';
import styles from './CurrentApartment.css';

export default class CurrentApartmentPure extends PureComponent {
    state = {
        currentPage: 1,
    };

    componentDidMount() {
        this.props.getCurrentApartment({
            id: this.props.match.params.id,
            city: this.props.match.params.city,
            page: this.state.currentPage,
        });
    }

    addToFavotites = () => {
        this.props.addApartmentToFavorites({
            ...this.props.currentApartment,
            city: this.props.match.params.city,
        });
    };

    render() {
        const { currentApartment } = this.props;

        if (!currentApartment) {
            return <>...Loading</>;
        }
        return (
            <>
                {
                    <div className={styles.container} key={currentApartment.img_url}>
                        <button type="button" className={styles.addToFavBtn} onClick={this.addToFavotites}>
                            Add
                        </button>
                        <p>{currentApartment.price}</p>
                        <p>{currentApartment.title}</p>
                        <img src={currentApartment.img_url} alt="" />
                        <p>Bedrooms: {currentApartment.bedroom_number}</p>
                        <p>Bathrooms: {currentApartment.bathroom_number}</p>
                        <p>{currentApartment.summary}</p>
                    </div>
                }
            </>
        );
    }
}

CurrentApartmentPure.propTypes = {
    addApartmentToFavorites: pt.func,
    match: pt.object,
    getCurrentApartment: pt.func,
    currentApartment: pt.object,
};
