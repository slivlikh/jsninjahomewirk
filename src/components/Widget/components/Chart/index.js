import React from 'react';

import { compose } from 'recompose';

import Chart from './Chart';

import withPath from '../../hoc/withPath';
import withExtremumPoints from '../../hoc/withExtremumPoints';


export default compose(
    withExtremumPoints,
    withPath,
)(Chart);