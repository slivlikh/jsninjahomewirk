import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAutocomplite } from './components/Autocomplete/api';

import Autocomplete from './components/Autocomplete';
import Widget from './components/Widget';

class App extends Component {
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
  }

  getItems = (text) => {
    return getAutocomplite(text);
  }

  render() {
    const { onChange, getItems } = this;
    const { autocompleteValue } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>

            {/*<Widget coin='BTC' pointsInStack={10} enoughPointsToDraw={2} />*/}

            <Autocomplete value={autocompleteValue} onChange={onChange} getItems={getItems} >
                {
                    (item) => ( <div key={item.id} > <b>{item.name}</b> (баланс: {item.balance}) </div>)
                }
            </Autocomplete>

        </div>
      </div>
    );
  }
}

export default App;
