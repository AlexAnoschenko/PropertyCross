import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Navigator.css';

export default class Navigator extends PureComponent {
    state = {
        activeLink: null,
    };

    handleLinkClick = (activeLink) => {
        this.setState({ activeLink });
    };

    render() {
        return (
            <div className={styles.navBlock}>
                <Link
                    to="/"
                    className={cx(styles.linkStyle, {
                        [styles.activeLink]: this.state.activeLink === 'pageOne',
                    })}
                    onClick={() => this.handleLinkClick('pageOne')}
                >
                    Counter
                </Link>
                <Link
                    to="/page2"
                    className={cx(styles.linkStyle, {
                        [styles.activeLink]: this.state.activeLink === 'pageTwo',
                    })}
                    onClick={() => this.handleLinkClick('pageTwo')}
                >
                    Page 2
                </Link>
                <Link
                    to="/page3"
                    className={cx(styles.linkStyle, {
                        [styles.activeLink]: this.state.activeLink === 'pageThree',
                    })}
                    onClick={() => this.handleLinkClick('pageThree')}
                >
                    Page 3
                </Link>
            </div>
        );
    }
}
