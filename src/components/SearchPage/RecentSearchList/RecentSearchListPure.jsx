import React, { PureComponent } from 'react';
import { uid } from 'react-uid';
import pt from 'prop-types';
import { Redirect } from 'react-router';
import styles from './RecentSearchList.css';
import { requestsRecentKey } from '../../../constants/recentRequest';

export default class RecentSearchListPure extends PureComponent {
    state = {};

    handleRecentRequestClick = (item, index) => {
        const { recentRequests, updateRecentSearch, getApartmentsList } = this.props;

        const sortedRecentRequests = recentRequests.sort(
            (x, y) => (y === recentRequests[index]) - (x === recentRequests[index])
        );

        updateRecentSearch(requestsRecentKey, sortedRecentRequests);
        getApartmentsList({ currentPage: 1, city: item })
            .then(() => {
                this.setState({
                    city: item,
                });
            })
            .catch(() => {
                return this.props.onSubmitError(
                    'An error occurred while searching. Please check your network connection and try again.'
                );
            });
    };

    render() {
        const { recentRequests } = this.props;
        const { city } = this.state;

        if (city) {
            return <Redirect to={`/results/${city}`} />;
        }
        return (
            <div className={styles.container}>
                <p>Recent searches:</p>
                <div className={styles.recentList}>
                    {recentRequests.map((item, index) => {
                        return (
                            <button
                                type="button"
                                className={styles.recentItem}
                                key={uid(index)}
                                onClick={() => this.handleRecentRequestClick(item, index)}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    }
}

RecentSearchListPure.propTypes = {
    recentRequests: pt.array,
    updateRecentSearch: pt.func,
    getApartmentsList: pt.func,
    onSubmitError: pt.func,
};
