import React from 'react';
import { storiesOf } from '@storybook/react';
import Widget from './Widget';

storiesOf('Widget', module)
    .add('Widget', () => (
        <Widget />
    ));