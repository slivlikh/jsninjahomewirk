import React from 'react';

import Chart from './components/Chart';

import './style.css';

const Widget = ({ coin, currency, points, deviation, deviationDynamic, coinsDynamic, pointsInStack }) => {

    return (
        <div className='widget' >
            <b className='currency-pair' >{coin} - USD</b>
            <br/>
            <span className={`currency  ${coinsDynamic}`} >{points[points.length-1]}</span>
            <span className={`deviationDynamic ${deviationDynamic}`} >({deviation})%</span>


            <Chart points={points} pointsInTheChart={pointsInStack} width={350} height={100} />

        </div>
    );
}

export default Widget;