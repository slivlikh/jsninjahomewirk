import React, { Component } from 'react';

export default function(WrappedComponent){
    return class extends Component{
        constructor(props){
            super(props);

            this.state = {
                value: this.props.value,
            }
        }

        onChange = (e) => {
            this.props.onChange(e);

            this.setState({
                value: e.currentTarget.value,
            });
        };

        onBlur = (e) => {
            this.props.onBlur(e);

            this.setState({
                value: '',
            });
        }

        render(){
            const { onChange, onBlur, ...rest } = this.props;
            const { value } = this.state;

            return(
                <WrappedComponent {...rest} onChange={this.onChange} onBlur={this.onBlur} value={value} />
            )
        }
    }
}