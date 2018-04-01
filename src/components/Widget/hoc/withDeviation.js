import React, {Component} from 'react';

const withDeviation = (WrappedComponent) => {
    return class WithDeviation extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            const {data, basePrice} = this.props;
            let deviation = 0;
            let deviationDynamic = 'none';

            if (data && basePrice) {
                const currentPrice = data.price;

                deviation = (currentPrice - basePrice) / basePrice;

                if (deviation > 0) {
                    deviationDynamic = 'hight';
                } else {
                    deviationDynamic = 'low';
                }

            }

            return (
                <WrappedComponent {...this.props} deviation={deviation} deviationDynamic={deviationDynamic}/>
            )
        }
    }
};

export default withDeviation;