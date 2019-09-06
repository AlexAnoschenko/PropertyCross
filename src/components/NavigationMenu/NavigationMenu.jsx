import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationMenuPure from './NavigationMenuPure';

export default withRouter((props) => {
    const { pathname } = props.location;

    return <NavigationMenuPure pathname={pathname} />;
});
