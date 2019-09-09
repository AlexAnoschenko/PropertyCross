import React, { PureComponent } from 'react';
import pt from 'prop-types';
import styles from './InputAdress.css';

export default class InputAdressPure extends PureComponent {
    state = {
        inputText: '',
    };

    onChangeInputText = (event) => {
        this.setState({ inputText: event.target.value });
    };

    onSubmit = () => {
        return this.props.handleSubmit({ currentPage: 1, city: this.state.inputText });
    };

    hundleLocationStatus = () => {
        return this.props.onLocationButtonClick();
    };

    render() {
        return (
            <div className={styles.inputAdressContainer}>
                <input type="text" placeholder="London" onChange={this.onChangeInputText} />
                <button type="button" onClick={this.onSubmit}>
                    Go
                </button>
                <button type="button" onClick={this.hundleLocationStatus}>
                    My location
                </button>
            </div>
        );
    }
}

InputAdressPure.propTypes = {
    onLocationButtonClick: pt.func,
    handleSubmit: pt.func,
};
