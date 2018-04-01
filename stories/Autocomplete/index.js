import React from 'react';
import { storiesOf } from '@storybook/react';
import Autocomplete from './Autocomplete';


storiesOf('Autocomplete', module)
    .add('Autocomplete', () => (
        <Autocomplete />
    ));