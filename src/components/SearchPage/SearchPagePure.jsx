import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { Redirect } from 'react-router';
import Overview from './Overview/Overview';
import InputAdressPure from './InputAdress/InputAdressPure';
import RecentSearchList from './RecentSearchList/RecentSearchList';
import ErrorRequest from './ErrorRequest/ErrorRequest';
import ChooseLocationList from './ChooseLocationList/ChooseLocationList';
import { requestsRecentKey } from '../../constants/recentRequest';

export default class SearchPagePure extends PureComponent {
    state = {
        searchPageStatus: 'recentSearchList',
    };

    componentDidMount = () => {
        this.props.getRecentRequests();
    };

    onSubmitError = (errorMessage) => {
        this.setState({ error: errorMessage, searchPageStatus: 'errorRequest' });
    };

    onLocationButtonClick = () => {
        this.setState({ searchPageStatus: 'chooseLocationList' });
    };

    handleSubmit = (payload) => {
        this.setState({ searchPageStatus: 'recentSearchList' });
        return this.props
            .getApartmentsList(payload)
            .then(() => {
                this.setState({
                    redirect: true,
                    city: payload.city,
                });
                this.props.updateRecentSearch(requestsRecentKey, [...this.props.recentRequests, payload.city]);
            })
            .catch((error) => {
                this.onSubmitError(error.message);
            });
    };

    render() {
        const { searchPageStatus, error, redirect, city } = this.state;

        if (redirect) {
            return <Redirect to={`/results/${city}`} />;
        }
        return (
            <>
                <Overview />
                <InputAdressPure handleSubmit={this.handleSubmit} onLocationButtonClick={this.onLocationButtonClick} />
                {searchPageStatus === 'recentSearchList' ? <RecentSearchList /> : null}
                {searchPageStatus === 'errorRequest' ? <ErrorRequest error={error} /> : null}
                {searchPageStatus === 'chooseLocationList' ? <ChooseLocationList /> : null}
            </>
        );
    }
}

SearchPagePure.propTypes = {
    getRecentRequests: pt.func,
    getApartmentsList: pt.func,
    recentRequests: pt.array,
    updateRecentSearch: pt.func,
};
