import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

export default class Display extends React.Component {

    constructor(props) {
        super();
        this.userId = props.userId;

        this.state = {
            msgs: props.msgs
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({msgs: nextProps.msgs});
    }

    render() {
        const messages = this.state.msgs.map((msg, index) => <Message key={index} msg={this.state.msgs[index]}/>);

        return (<div>{messages}</div>);
    }
}