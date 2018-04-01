import React, { Component } from 'react';
import Widget from '../../src/components/Widget';

class PresentationWidget extends Component {
    render() {
        return (
            <Widget coin='BTC' pointsInStack={10} enoughPointsToDraw={2} />

        );
    }
}

export default PresentationWidget;