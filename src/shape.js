import PropTypes from 'prop-types';

export const msgPropType = PropTypes.shape({
    message: PropTypes.string.isRequired,
});

export const msgsPropType = PropTypes.arrayOf(msgPropType);
