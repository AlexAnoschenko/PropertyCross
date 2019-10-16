import React, { PureComponent } from 'react';
import pt from 'prop-types';
import styles from './ApartmentsPage.css';
import Apartment from './Apartment/Apartment';
import InfiniteScroll from './InfiniteScroll/InfiniteScroll';

export default class ApartmentsPagePure extends PureComponent {
    state = {
        currentPage: 1,
    };

    componentDidMount = () => {
        if (!this.props.apartments) {
            this.props.getApartmentsList({ currentPage: this.state.currentPage, city: this.props.match.params.city });
        }
    };

    updateData = () => {
        this.props
            .getApartmentsList({ currentPage: this.state.currentPage + 1, city: this.props.match.params.city })
            .then(() => {
                this.setState({
                    currentPage: this.state.currentPage + 1,
                });
            });
    };

    render() {
        const { apartments } = this.props;

        if (!apartments) {
            return <>...Loading</>;
        }
        if (apartments.length === 0) {
            return <>The location given was not recognised.</>;
        }
        return (
            <InfiniteScroll updateData={this.updateData}>
                <div className={styles.container}>
                    {apartments.map((apartment) => {
                        return (
                            <Apartment
                                apartment={apartment}
                                key={apartment.lister_url}
                                city={this.props.match.params.city}
                            />
                        );
                    })}
                </div>
            </InfiniteScroll>
        );
    }
}

ApartmentsPagePure.propTypes = {
    apartments: pt.array,
    getApartmentsList: pt.func,
    match: pt.object,
};
