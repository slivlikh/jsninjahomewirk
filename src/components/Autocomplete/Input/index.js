import React from 'react';
import { compose } from 'recompose';

import withDebounce from '../hocs/withDebounce';
import withInputValue from '../hocs/withInputValue';
import Input from './Input';


const enhance = compose(
    withDebounce(400),
    withInputValue,
);

const EnhancedInput = enhance(Input);

export default EnhancedInput;