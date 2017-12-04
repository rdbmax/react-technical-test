import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    state = {
        inputContent: '',
        inputError: false,
    }

    /**
     * Checks the current value in addMsgInput and assign it to this.state.inputContent
     * @param {*object} e
     */
    updateInput = ({ target: { value: inputContent } }) => {
        this.setState({ inputContent });
    }

    /**
     * Verifies if the user wrote a new message before sending it to <App />
     * @param {*object} newMsg
     */
    onSendMsg = ({ isPrivate }) => () => {
        const { userId, addingMsg } = this.props;
        const { inputContent } = this.state;

        const msg = { message: inputContent };

        if (isPrivate)
            msg.messageKey = userId;

        if(!/^ *$/.test(inputContent)) {
            addingMsg(msg);
            this.setState({ inputError: false, inputContent: '' });
        }
        else
            this.setState({inputError: true});
    }

    /**
     * Submit public message when you press "enter"
     * @param {*object} e
     */
    handleKeyPress = ({ which }) => {
        if (which === 13)
            this.onSendMsg({ isPrivate: false })();
    }

    render() {
        const { inputContent, inputError } = this.state;

        return(
            <div id="add-message-tool">
                <input
                    className={inputError ? 'user-error' : ''}
                    placeholder="Insérez votre message et choisissez un status"
                    type="text"
                    onChange={this.updateInput}
                    value={inputContent}
                    onKeyPress={this.handleKeyPress}
                />
                <div id="default-status">*Le status par défaut est publique</div>
                <button onClick={this.onSendMsg({ isPrivate: false })}>envoyer message publique</button>
                <button onClick={this.onSendMsg({ isPrivate: true })}>envoyer message privé</button>
            </div>
        )
    }

}

App.propTypes = {
    addingMsg: PropTypes.func.isRequired,
    userId: PropTypes.number.isRequired,
}
