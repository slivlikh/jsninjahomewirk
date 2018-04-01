import React, { Component } from 'react';

const withDynamics = (WrappedComponent) => {
    return class WithDynamics extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            const { points } =  this.props;
            let coinsDynamic = null;

            if(points.length >= 2){
                let lastPoint = points[points.length - 1];
                let secondLastPoint = points[points.length - 2];

                if(lastPoint > secondLastPoint){
                    coinsDynamic = 'hight';
                }else if(lastPoint < secondLastPoint){
                    coinsDynamic = 'low';
                }else {
                    coinsDynamic = 'none';
                }
            }

            return(
                <WrappedComponent { ...this.props } coinsDynamic={coinsDynamic} />
            )
        }
    }
};

export default withDynamics;