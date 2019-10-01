import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { throttle } from 'throttle-debounce';

export default class InfiniteScroll extends PureComponent {
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollDown);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollDown);
    }

    onScrollDown = throttle(3000, () => {
        const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

        if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
            this.props.updateData();
        }
    });

    render() {
        return <>{this.props.children}</>;
    }
}

InfiniteScroll.propTypes = {
    updateData: pt.func,
    children: pt.node,
};
