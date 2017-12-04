import React from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import Input from './Input'

export default class App extends React.Component {
    static propTypes = {
        userId: PropTypes.number,
        initialMsgs: PropTypes.array
    }

    constructor(props) {
      super(props);

      this.state = {
        msgs: props.initialMsgs,
      }
    }

    /**
     * Adds new message object to msgs array
     * new messages are added from the component <Input />
     * @param {*object} newMsg
     */
    addMsg = newMsg => {
        const { msgs } = this.state;
        this.setState({ msgs: [...msgs, newMsg] });
    }

    render() {
        const { userId } = this.props;
        const { msgs } = this.state;

        return (
            <div id="main">
                <h1>Liste des messages</h1>
                <Input addingMsg={this.addMsg} userId={userId} />
                <Display msgs={msgs} userId={userId} />
            </div>
        )
    }
}
