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

    /**
     * Adds new message object to msgs array
     * new messages are added from the component <Input />
     * @param {*object} newMsg 
     */
    addMsg(newMsg) {

        let currentMsgs = this.state.msgs;
        let newMsgs = currentMsgs.concat(newMsg);

        this.setState({msgs: newMsgs});
    }
    
    render() {
        return (
            <div id="main">
                <h1>Liste des messages</h1>
                <Input addingMsg={this.addMsg.bind(this)} userId={this.userId} />
                <Display msgs={this.state.msgs} userId={this.userId} />
            </div>
        )
    }
}

App.propTypes = {
    userId: PropTypes.number,
    initialMsgs: PropTypes.array
}
