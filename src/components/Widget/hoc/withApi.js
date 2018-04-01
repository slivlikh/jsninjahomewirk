import React, { Component } from 'react';
import CoinsApi from '../api';

const enhance = (WrappedComponent) => {
    return class WithData extends Component {
        constructor(props) {
            super(props);

            this.state = {
                points: [],
            };
        }

        componentDidMount() {
            const { coin } = this.props;

            this.api = new CoinsApi();

            this.api.subscribe(coin, this.subscriber);
        }

        componentWillUnmount() {
            const { coin } = this.props;

            this.api.unSubscribe(coin, this.subscriber);
        }

        subscriber = (data) => {

            this.setState({
                data: data
            })
        }

        render() {
            const { data } = this.state;

            return (
                <WrappedComponent {...this.props} data={data} />
            )
        }
    }
};

export default enhance;