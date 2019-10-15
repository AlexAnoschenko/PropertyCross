import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { uid } from 'react-uid';
import styles from './ChooseLocationList.scss';

export default class ChooseLocationListPure extends PureComponent {
    componentDidMount() {
        this.props.getLocationsList();
    }

    render() {
        const { locations } = this.props;

        if (locations.length === 0) {
            return <>...Loading</>;
        }
        return (
            <div className={styles.container}>
                <p>Please select a location below:</p>
                {locations.map((item, index) => {
                    return (
                        <div className={styles.location} key={uid(index)}>
                            {item.title}
                        </div>
                    );
                })}
            </div>
        );
    }
}

ChooseLocationListPure.propTypes = {
    locations: pt.array,
    getLocationsList: pt.func,
};
