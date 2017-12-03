import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {

    constructor(props) {
        super();
        this.userId = props.userId;
        this.addingMsg = props.addingMsg;
        this.state = {
            inputContent: ''
        }
    }

    /**
     * Checks the current value in addMsgInput and assign it to this.state.inputContent
     * @param {*object} e 
     */
    updateInput(e) {
        this.setState({
            inputContent: e.target.value
        });
    }

    /**
     * Creates a message object including the new message create by the user.
     */
    createPublicMsg() {

        return {message: this.state.inputContent}       
    }


    /**
     * Transforms a public message to a private message by adding a messageKey property
     * The messageKey value is equal to the userId, meaning the user can see his own private messages.
     */
    createPrivateMsg() {

        let newMsg = this.createPublicMsg();

        newMsg.messageKey = this.userId;

        return newMsg;
    }

    /**
     * Verifies if the user wrote a new message before sending it to <App />
     * @param {*object} newMsg 
     */
    sendMsg(newMsg) {
        if(!/^ *$/.test(this.state.inputContent)) {
            this.addingMsg(newMsg);
        } else {
            this.refs.addMsgInput.placeholder = "Créez votre message";
        }

        this.cleanMsgInput();
    }

    /**
     * Reset input value and state to avoid resending the same message
     */
    cleanMsgInput() {
        this.refs.addMsgInput.value = '';

        this.setState({
            inputContent:''
        });
    }

    render() {
        return(
            <div>
                <input type="text" ref="addMsgInput" onChange={(e) => this.updateInput(e)} />
                <button onClick={() => {this.sendMsg(this.createPublicMsg())} }>Public</button>
                <button onClick={() => {this.sendMsg(this.createPrivateMsg())} }>Private</button>
            </div>
        )
    }

}

App.propTypes = {
    addingMsg: PropTypes.func
}
