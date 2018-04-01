import React, { Component } from 'react';
import Autocomplete from '../../src/components/Autocomplete';
import { getAutocomplite } from '../../src/components/Autocomplete/api';

class PresentationAutocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autocompleteValue: "",
        }
    }


    onChange = (item) => {
        this.setState({
            autocompleteValue: item.name,
        })
    };

    getItems = (text) => {
        return getAutocomplite(text);
    };

    render() {
        const { autocompleteValue } = this.state;

        return (
          <Autocomplete value={autocompleteValue} onChange={this.onChange} getItems={this.getItems} >
            {
              (item) => ( <div key={item.id} > <b>{item.name}</b> (баланс: {item.balance}) </div>)
            }
          </Autocomplete>

        );
    }
}

export default PresentationAutocomplete;