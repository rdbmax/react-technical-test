import React from "react";
import PropTypes from 'prop-types'


export default class Message extends React.Component {
    constructor(props) {
        super();
        this.message = props.msg.message;
        this.key = props.msg.key;
    }

    render() {
        return (
            <div><h1>{this.message}</h1></div>
        );
    }
}

Message.propTypes = {
    msg: PropTypes.object
}