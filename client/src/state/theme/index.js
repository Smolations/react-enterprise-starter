/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
} from 'react';


const themes = {
  ORANGE: 'orange',
  LIGHT: 'light',
  DARK: 'dark',
};

const ThemeContext = createContext(themes.ORANGE);

const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export {
  ThemeProvider,
  useTheme,
};
