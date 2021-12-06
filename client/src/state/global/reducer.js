import types from './types';

export default function reducer(state, action) {
  const { type, payload } = action;
  let newState;

  switch (type) {
    case types.CHANGE_FOO: {
      const newValue = payload;

      newState = {
        ...state,
        foo: newValue,
      };
    } break;

    case types.SET_THEME: {
      const newTheme = payload;

      newState = {
        ...state,
        theme: newTheme,
      };
    } break;

    default:
      newState = state;
  }

  return newState;
}
