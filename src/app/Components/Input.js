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
        let addMsgInput = this.refs.addMsgInput;

        if(!/^ *$/.test(this.state.inputContent)) {
            this.addingMsg(newMsg);
            addMsgInput.classList.remove('user-error');
        } else {
            addMsgInput.className = "user-error";
        }

        this.cleanMsgInput();
    }

    /**
     * Submit public message when you press "enter"
     * @param {*object} e 
     */
    handleKeyPress(e) {
        if (e.which !== 13) return;

        this.sendMsg(this.createPublicMsg());
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
            <div id="add-message-tool">
                <input 
                    placeholder="Insérez votre message et choisissez un status" 
                    type="text" ref="addMsgInput" 
                    onChange={(e) => this.updateInput(e)} 
                    onKeyPress={this.handleKeyPress.bind(this)}
                />
                <div id="default-status">*Le status par défault est publique</div>
                <button onClick={() => {this.sendMsg(this.createPublicMsg())} }>envoyer message publique</button>
                <button onClick={() => {this.sendMsg(this.createPrivateMsg())} }>envoyer message privé</button>
            </div>
        )
    }

}

App.propTypes = {
    addingMsg: PropTypes.func
}
