import React, { Component } from 'react';

const withEnoughPoints = (WrappedComponent) => {
    return class WithPoints extends Component {
        constructor(props) {
            super(props);

        }

        render() {
            const { points, enoughPointsToDraw } =  this.props;

            return(
                <WrappedComponent { ...this.props } isShowingSpiner={points.length < enoughPointsToDraw} />
            )
        }
    }
};

export default withEnoughPoints;