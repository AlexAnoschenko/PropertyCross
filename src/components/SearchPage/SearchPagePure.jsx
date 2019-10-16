import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { Redirect } from 'react-router';
import Overview from './Overview/Overview';
import InputAdressPure from './InputAdress/InputAdressPure';
import RecentSearchList from './RecentSearchList/RecentSearchList';
import ErrorRequest from './ErrorRequest/ErrorRequest';
import ChooseLocationList from './ChooseLocationList/ChooseLocationList';
import { requestsRecentKey } from '../../constants/recentRequest';
import Wrapper from '../Wrapper/Wrapper';

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
                this.props.updateRecentSearch(requestsRecentKey, [payload.city, ...this.props.recentRequests]);
            })
            .catch((error) => {
                if (error.message === 'Failed to fetch') {
                    return this.onSubmitError(
                        'An error occurred while searching. Please check your network connection and try again.'
                    );
                }
                return this.onSubmitError(error.message);
            });
    };

    render() {
        const { searchPageStatus, error, redirect, city } = this.state;

        if (redirect) {
            return <Redirect to={`/results/${city}`} />;
        }
        return (
            <Wrapper>
                <Overview />
                <InputAdressPure
                    handleSubmit={this.handleSubmit}
                    onLocationButtonClick={this.onLocationButtonClick}
                    onSubmitError={this.onSubmitError}
                />
                {searchPageStatus === 'recentSearchList' ? (
                    <RecentSearchList
                        getApartmentsList={this.props.getApartmentsList}
                        onSubmitError={this.onSubmitError}
                    />
                ) : null}
                {searchPageStatus === 'errorRequest' ? <ErrorRequest error={error} /> : null}
                {searchPageStatus === 'chooseLocationList' ? <ChooseLocationList /> : null}
            </Wrapper>
        );
    }
}

SearchPagePure.propTypes = {
    getRecentRequests: pt.func,
    getApartmentsList: pt.func,
    recentRequests: pt.array,
    updateRecentSearch: pt.func,
};
