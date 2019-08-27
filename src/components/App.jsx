import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { plusOne } from '../actions';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!!!</h1>
                <input type="text" value={this.props.num}></input>
                <input type="button" value="Go!" onClick={this.props.plusOne}></input>
                <input type="text" value={this.props.user}></input>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    console.log(store);
    return {
        user: store.user,
        num: store.num,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        plusOne: () => dispatch(plusOne()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
