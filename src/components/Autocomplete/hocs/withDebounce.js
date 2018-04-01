import React, { Component } from 'react';
import debounce from 'lodash.debounce';

export default function(debounceDuration = 200){
    return function(BaseComponent){
        return class extends Component {
            constructor(props){
                super(props);
            }

            debouncedUpdate = debounce((value) => {
                const { onChange } = this.props;

                onChange(value);
            }, debounceDuration, {
                leading: false,
                trailing: true,
            });

            onChange = (e) => {
                const value = e.currentTarget.value;
                const { onChangeImmediately, onChange } = this.props;

                if(onChangeImmediately){
                    onChangeImmediately(value);
                    this.debouncedUpdate(value)

                }else {
                    onChange(value);
                }
            };

            render(){
                const { onChangeImmediately, onChange, ...rest } = this.props;

                return (
                    <BaseComponent onChange={this.onChange} {...rest} />
                )
            }
        }
    }
}