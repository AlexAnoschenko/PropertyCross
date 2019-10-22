import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ApartmentsPage.css';
import Apartment from './Apartment/Apartment';
import InfiniteScroll from './InfiniteScroll/InfiniteScroll';
import Wrapper from '../Wrapper/Wrapper';

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
        const { apartments, match, totalResults } = this.props;

        if (!apartments) {
            return <>...Loading</>;
        }
        if (apartments.length === 0) {
            return <>The location given was not recognised.</>;
        }
        return (
            <Wrapper>
                <InfiniteScroll updateData={this.updateData}>
                    <div className={styles.nivigation}>
                        <Link to="/">
                            <button type="button" className={styles.backBtn}>
                                <img
                                    src="https://image.flaticon.com/icons/svg/60/60573.svg"
                                    alt=""
                                    className={styles.icon}
                                />
                            </button>
                        </Link>
                        <p className={styles.title}>{`20 of ${totalResults} matches`}</p>
                    </div>

                    <div className={styles.container}>
                        <div>
                            {apartments.map((apartment) => {
                                return (
                                    <Apartment
                                        apartment={apartment}
                                        key={apartment.lister_url}
                                        city={match.params.city}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </Wrapper>
        );
    }
}

ApartmentsPagePure.propTypes = {
    apartments: pt.array,
    getApartmentsList: pt.func,
    match: pt.object,
    totalResults: pt.number,
};
