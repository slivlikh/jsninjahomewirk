import React from 'react';

import './style.css';

const Chart = ({ path, width, height, maxPoint, minPoint }) => {

    return (<div className='chart' >

        <svg width={width} height={height} >
            <path d={path}  />
        </svg>
        <span className='maxPoint'>{maxPoint}</span>
        <span className='minPoint'>{minPoint}</span>
    </div>)
};

export default Chart;