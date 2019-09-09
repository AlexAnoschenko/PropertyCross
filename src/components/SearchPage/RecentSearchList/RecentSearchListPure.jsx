import React, { PureComponent } from 'react';
import { uid } from 'react-uid';
import pt from 'prop-types';
import styles from './RecentSearchList.scss';

export default class RecentSearchListPure extends PureComponent {
    render() {
        const { recentRequests } = this.props;

        return (
            <div className={styles.container}>
                <p>Recent searches:</p>
                {recentRequests.map((item, index) => {
                    return (
                        <div className={styles.recentItem} key={uid(index)}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    }
}

RecentSearchListPure.propTypes = {
    recentRequests: pt.array,
};
