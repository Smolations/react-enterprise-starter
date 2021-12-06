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

    default:
      newState = state;
  }

  return newState;
}
