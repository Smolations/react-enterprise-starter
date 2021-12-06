/* eslint-disable import/prefer-default-export */
import types from './types';

export function setFoo(newValue) {
  return {
    type: types.CHANGE_FOO,
    payload: newValue,
  };
}
