import React, { Component } from 'react';

const withExtremumPoints = (WrappedComponent) => {
    return class WithDynamics extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            const { points } =  this.props;
            if(points.length === 0) { return null; }

            let maxPoint = points[0];
            let minPoint = points[0];

            points.forEach((point) => {
                if(maxPoint < point){ maxPoint = point }
                if(minPoint > point){ minPoint = point }
            });

            return(
                <WrappedComponent { ...this.props } maxPoint={maxPoint} minPoint={minPoint} />
            )
        }
    }
};

export default withExtremumPoints;