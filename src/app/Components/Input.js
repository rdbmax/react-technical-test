import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {

    constructor(props) {
        super();
        this.userId = props.userId;
        this.state = {
            inputContent: ''
        }
    }

    updateInput(e) {
        this.setState({
            inputContent: e.target.value
        });
    }

    sendPublicMsg() {
        let newMsg = {
            message: this.state.inputContent,
        }
        this.props.addingMsg(newMsg);
    }

    sendPrivateMsg() {
        let newMsg = {
            message: this.state.inputContent,
            messageKey: this.userId
        }
        this.props.addingMsg(newMsg);
    }

    render() {
        return(
            <div>
                <input type="text" onChange={(e) => this.updateInput(e)} />
                <button onClick={this.sendPublicMsg.bind(this)}>Public</button>
                <button onClick={this.sendPrivateMsg.bind(this)}>Private</button>
            </div>
        )
    }

}

App.propTypes = {
    addMsg: PropTypes.func
}