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
        const messages = this.state.msgs.map((msg, index) => {

            let isPrivate = ("messageKey" in msg)
            
            if (msg.messageKey === this.userId || !isPrivate) {
                return <Message key={index} msg={msg} isPrivate={isPrivate} />
            }
    });

        return (<div>{messages}</div>);
    }
}