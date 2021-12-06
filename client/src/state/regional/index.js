import { state } from '..';

import regionalInitialState from './initial-state';
import regionalStateReducer from './reducer';
import * as regionalStateActions from './actions';


const [
  RegionalStateProvider,
  useRegionalState,
] = state(regionalInitialState, regionalStateReducer);


export {
  RegionalStateProvider,
  useRegionalState,
  regionalStateActions,
};

