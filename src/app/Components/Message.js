import React from "react";
import PropTypes from 'prop-types'

const PRIVATE_MSG = {
    text: 'message privé',
    style: 'message private',
    icon: 'fa fa-lock'
};

const PUBLIC_MSG = {
    text: 'message publique',
    style: 'message public',
    icon: 'fa fa-eye'
};

const Message = ({ msg: { message }, isPrivate }) => {
    const { text, style, icon } = (isPrivate) ? PRIVATE_MSG : PUBLIC_MSG;

    return (
        <div className={style}>
            <h2>{message}</h2>
            <span>{text} <i className={icon} /></span>
        </div>
    )
};

Message.propTypes = {
    msg: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }).isRequired,
    isPrivate: PropTypes.bool.isRequired
};

export default Message;
