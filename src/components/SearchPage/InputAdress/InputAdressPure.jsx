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
        const { onSubmitError, handleSubmit } = this.props;
        const { inputText } = this.state;

        if (inputText === '') {
            return onSubmitError('There were no properties found for the given location (Empty string).');
        }
        return handleSubmit({ currentPage: 1, city: inputText });
    };

    hundleLocationStatus = () => {
        return this.props.onLocationButtonClick();
    };

    render() {
        return (
            <div className={styles.container}>
                <input
                    className={styles.dataInput}
                    type="text"
                    placeholder="newcastle"
                    onChange={this.onChangeInputText}
                />
                <div className={styles.containerBtn}>
                    <button className={styles.button} type="button" onClick={this.onSubmit}>
                        Go
                    </button>
                    <button className={styles.button} type="button" onClick={this.hundleLocationStatus}>
                        My location
                    </button>
                </div>
            </div>
        );
    }
}

InputAdressPure.propTypes = {
    onLocationButtonClick: pt.func,
    handleSubmit: pt.func,
    onSubmitError: pt.func,
};
