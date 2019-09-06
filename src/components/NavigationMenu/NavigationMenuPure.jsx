import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import pt from 'prop-types';
import styles from './NavigationMenu.css';

export default class NavigationMenuPure extends PureComponent {
    render() {
        const { pathname } = this.props;

        return (
            <div className={styles.navBlock}>
                <Link
                    to="/"
                    className={cx(styles.linkStyle, {
                        [styles.activeLink]: pathname === '/',
                    })}
                >
                    Counter
                </Link>
                <Link
                    to="/page2"
                    className={cx(styles.linkStyle, {
                        [styles.activeLink]: pathname === '/page2',
                    })}
                >
                    Page 2
                </Link>
                <Link
                    to="/page3"
                    className={cx(styles.linkStyle, {
                        [styles.activeLink]: pathname === '/page3',
                    })}
                >
                    Page 3
                </Link>
            </div>
        );
    }
}

NavigationMenuPure.propTypes = {
    pathname: pt.string,
};
