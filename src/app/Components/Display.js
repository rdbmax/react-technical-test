import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const hasMessageKey = userKey => ({ messageKey }) => (userKey === messageKey);
const isPublic = ({ messageKey }) => (!messageKey);
const publicOrUserMessage = userKey => msg => (isPublic(msg) || hasMessageKey(userKey)(msg));

const Display = ({ userId, msgs }) => (
    <div id="message-container">
        { msgs
            .filter(publicOrUserMessage(userId))
            .map(msg =>
                <Message key={msg.message} msg={msg} isPrivate={!isPublic(msg)} />
            ) }
    </div>
);

Display.propTypes = {
    userId: PropTypes.number,
    msgs: PropTypes.array
};

export default Display;
