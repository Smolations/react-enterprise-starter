import types from './types';

export function setFoo(newValue) {
  return {
    type: types.CHANGE_FOO,
    payload: newValue,
  };
}

export function setTheme(newTheme) {
  return {
    type: types.SET_THEME,
    payload: newTheme,
  };
}
