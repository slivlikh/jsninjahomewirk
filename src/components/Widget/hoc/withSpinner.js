import React, { Component } from 'react';

const withSpinner = (WrappedComponent) => {
    return class WithPoints extends Component {
        constructor(props) {
            super(props);

        }

        render() {
            const { isShowingSpiner } =  this.props;

            if(isShowingSpiner) {
                return (
                    <p>Loading ...</p>
                )
            }

            return(
                <WrappedComponent { ...this.props } />
            )
        }
    }
};

export default withSpinner;