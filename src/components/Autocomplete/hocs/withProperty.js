import React, { Component } from 'react';

export default function withThis(key, setter, getter, initVal) {
    return function (BaseComponent) {
        return class extends Component {
            constructor(props) {
                super(props);

                this[key] = initVal;

                this[setter] = (newVal) => {
                    this[key] = newVal;
                };

                this[getter] = () => {
                    return this[key]
                };
            }

            render() {
                const toProps = {};

                toProps[setter] = this[setter];
                toProps[getter] = this[getter];

                return (
                    <BaseComponent {...this.props} {...toProps}   />
                )
            }
        }
    }
}