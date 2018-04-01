import React from 'react';

const Input = ({ className, ...rest }) => {
    return (
        <input type='text' className={`input ${className}`} {...rest} />
    );
};

Input.defaultProps = {
    className: '',
};

export default Input;