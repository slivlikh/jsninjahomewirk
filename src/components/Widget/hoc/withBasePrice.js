import React, { Component } from 'react';

const withBasePrice = (WrappedComponent) => {
    return class WithBasePrice extends Component {
        constructor(props) {
            super(props);

            this.basePrice = null;

        }

        render() {
            const { points } =  this.props;

            if(!this.basePrice && points.length > 0){
                this.basePrice = points[0];
            }

            return(
                <WrappedComponent { ...this.props } basePrice={this.basePrice} />
            )
        }
    }
};

export default withBasePrice;