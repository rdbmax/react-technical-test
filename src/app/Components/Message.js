import React from "react";
import PropTypes from 'prop-types'


export default class Message extends React.Component {
    constructor(props) {
        super();
        this.message = props.msg.message;
        this.isPrivate = props.isPrivate;
    }

    render() {
        let status = this.isPrivate ? 
        {
            text: 'message privé',
            style: 'message private',
            icon: 'fa fa-lock'
        } : 
        {
            text: 'message publique',
            style: 'message public',
            icon: 'fa fa-eye'
        };

        return (
            <div className={status.style}>
                <h2>{this.message}</h2>
                <span>{status.text} <i className={status.icon}></i></span>             
            </div>
        );
    }
}

Message.propTypes = {
    msg: PropTypes.object,
    isPrivate: PropTypes.bool
}
