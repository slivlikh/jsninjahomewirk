import React, { Component } from 'react';

const withPath = (WrappedComponent) => {
    return class WithDynamics extends Component {
        constructor(props) {
            super(props);
        }

        getPath() {
            const { points, height } = this.props;

            console.log(this.props);

            return points.reduce((acc, point, index)=>{
                return ` ${acc} L ${this.widthBetweenPoints * index} ${this.getYPosition(point)}`
            }, `M 0 ${height}`);
        }

        getYPosition (point) {
            const {  maxPoint, minPoint, height } =  this.props;
            const coinsByPixel = height / (maxPoint - minPoint);

            return Math.round(Math.abs(height - ((point - minPoint) * coinsByPixel)));
        }

        render() {
            const { points, width, height } =  this.props;
            const pointsLength = points.length;
            this.widthBetweenPoints = Math.round(width / (pointsLength - 1));


            const path = `${this.getPath()} L ${width} ${height} Z`;

            return(
                <WrappedComponent { ...this.props } path={path} />
            )
        }
    }
};

export default withPath;