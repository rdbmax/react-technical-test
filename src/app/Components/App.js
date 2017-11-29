import React from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import Input from './Input'

export default class App extends React.Component {

    constructor(props) {
        super();
        this.userId = props.userId;
        this.state = {
            msgs: props.initialMsgs
        }

    }

    addMsg(newMsg) {

        let currentMsgs = this.state.msgs;
        let newMsgs = currentMsgs.concat(newMsg);


        this.setState({msgs: newMsgs});

    }

    render() {
        return (
        <div>
            <Display msgs={this.state.msgs} userId={this.userId} />
            <Input addingMsg={this.addMsg.bind(this)} />
        </div>)
    }
}

App.propTypes = {
    userId: PropTypes.string,
    initialMsgs: PropTypes.array
}