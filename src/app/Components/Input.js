import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {

    constructor(props) {
        super();
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
            isPrivate: false
        }
        this.props.addingMsg(newMsg);
    }

    render() {
        return(
            <div>
                <input type="text" onChange={(e) => this.updateInput(e)} />
                <button onClick={this.sendPublicMsg.bind(this)}>test</button>
            </div>
        )
    }

}

App.propTypes = {
    addMsg: PropTypes.func
}