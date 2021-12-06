/* eslint-disable import/prefer-default-export, react/prop-types, react/jsx-filename-extension */
import React, {
  createContext,
  useContext,
  useReducer,
} from 'react';


/**
 *  This is a state generator. It uses the context API and hooks to create
 *  a simple, yet effective global state management tool. This one uses the
 *  reducer pattern but it could be modified to hold even simpler state.
 *
 * @param {object} initialState
 * @param {func}   reducer       Signature is `(state, action)` where the
 *                               `action` is passed via the dispatch function
 *                               when using `useStateValue()` within components.
 *
 * @returns {func[]} A small tuple of functions. The first is the StateProvider
 *                   component, meant to wrap a component tree. The second is
 *                   the state hook (e.g. `useStateValue`). When invoking the
 *                   hook within components, its return signature is:
 *                  `[state, dispatch]`, where `dispatch` is a function that
 *                   updates the state.
 */
export function state(initialState, reducer) {
  const StateContext = createContext();
  const useStateValue = () => useContext(StateContext);

  function StateProvider({ children }) {
    return (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    );
  }

  return [StateProvider, useStateValue];
}
