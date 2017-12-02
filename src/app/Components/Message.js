import React from "react";
import PropTypes from 'prop-types'


export default class Message extends React.Component {
    constructor(props) {
        super();
        this.message = props.msg.message;
        this.isPrivate = props.isPrivate;
    }

    render() {
        const messageScopeInfo = this.isPrivate ? 'Ceci est un message privé' : 'Ceci est un message public'; 

        return (
            <div>
                <h1>{this.message}</h1>
                <p>{messageScopeInfo}</p>
            </div>
        );
    }
}

Message.propTypes = {
    msg: PropTypes.object,
    isPrivate: PropTypes.bool
}