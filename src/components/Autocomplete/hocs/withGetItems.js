import React, { Component } from 'react';

export default function(WrappedComponent){
    return class WithGetItems extends Component {

        constructor(props){
            super(props);

            this._isMounted = false;
            this.promise = null;

            this.state = {
                itemsList: []
            }
        }

        componentDidMount (){
            this._isMounted = true;
        }

        componentWillUnmount(){
            this._isMounted = false;
        }

        getItems = (val, ...rest) => {
            const { getItems } = this.props;

            if(this.promise && this.promise.abort){
                this.promise.abort();
            }

            if(!val) {
                this.setState({
                    itemsList: [],
                })
            }

            this.promise = getItems(val, ...rest);
            this.promise.then((res)=>{
                this.promise = null;

                if(this._isMounted){
                    this.setState({
                        itemsList: res,
                    })
                }
            }).catch(()=>{
                this.promise = null;
            })
        };

        render(){

            const { itemsList } = this.state;
            const { getItems, ...rest } = this.props;

            return(
                <WrappedComponent getItems={this.getItems} itemsList={itemsList} {...rest} />
            )
        }
    }
}