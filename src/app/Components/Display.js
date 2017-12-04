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

    /**
     * When <Display /> receives new props from his parent <App />, updates this.state.msgs
     * @param {*object} nextProps 
     */
    componentWillReceiveProps(nextProps) {
        this.setState({msgs: nextProps.msgs});
    }

    render() {
        const messages = this.state.msgs.map((msg, index) => {

            /**
             * If msg has a key, then it is a private message
             */
            let isPrivate = ("messageKey" in msg)
            
            /**
             * If the message is private with a messageKey different from userId, 
             * then the message should not be displayed
             */
            if (msg.messageKey === this.userId || !isPrivate) {
                return <Message key={index} msg={msg} isPrivate={isPrivate} />
            }
    });

        return (<div id="message-container">{messages}</div>);
    }
}

Display.propTypes = {
    userId: PropTypes.number,
    msgs: PropTypes.array
}
