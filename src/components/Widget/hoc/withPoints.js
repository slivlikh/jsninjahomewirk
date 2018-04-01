import React, { Component } from 'react';

const withPoints = (WrappedComponent) => {
    return class WithPoints extends Component {
        constructor(props) {
            super(props);

            this.points = [];
        }

        render() {
            const { data, pointsInStack } =  this.props;
            const newPoints = this.points.concat([]);

            if(data) {
                const { price } =  data;

                newPoints.push(price);

                if(newPoints.length > pointsInStack ){
                    newPoints.shift();
                }

                this.points = newPoints;
            }

            return(
                <WrappedComponent { ...this.props } points={newPoints} />
            )
        }
    }
};

export default withPoints;