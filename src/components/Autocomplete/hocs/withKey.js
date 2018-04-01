import React, { Component } from 'react';

export default function withKey(BaseComponent) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.key = 0;
        }

        updateKey = (val) => {
            this.key++;
        };


        render() {
            return (
                <BaseComponent {...this.props} updateKey={this.updateKey} key={this.key} />
            )
        }
    }
}