import React from 'react';

const ResultItem = ({ children, onClick }) => (
    <div onMouseDown={onClick} >
        { children }
    </div>
);

export default ResultItem;