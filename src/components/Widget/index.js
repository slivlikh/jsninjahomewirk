import React from 'react';
import { compose } from 'recompose';

import Widget from './Widget';

import withApi from './hoc/withApi';
import withDynamics from './hoc/withDynamics';
import withPoints from './hoc/withPoints';
import withSpinnerLogic from './hoc/withSpinnerLogic';
import withSpinner from './hoc/withSpinner';
import withDeviation from './hoc/withDeviation';
import withBasePrice from './hoc/withBasePrice';


export default compose(
    withApi,
    withPoints,
    withBasePrice,
    withSpinnerLogic,
    withSpinner,
    withDynamics,
    withDeviation,
)(Widget);