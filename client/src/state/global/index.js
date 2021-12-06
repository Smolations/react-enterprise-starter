import { state } from '..';

import globalInitialState from './initial-state';
import globalStateReducer from './reducer';
import * as globalStateActions from './actions';


const [
  GlobalStateProvider,
  useGlobalState,
] = state(globalInitialState, globalStateReducer);


export {
  GlobalStateProvider,
  useGlobalState,
  globalStateActions,
};
