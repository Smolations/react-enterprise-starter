import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { useGlobalState } from 'state/global';
import themes from '../../sass/modules/theme.module.scss';


export default function Theme(props) {
  const [{ theme }] = useGlobalState(); // @todo replace with new theme provider?

  useEffect(() => {
    const body = document.querySelector('body');
    const themeClass = themes[theme] || '';

    if (body && themeClass) {
      body.classList.add(themeClass);
      return () => body.classList.remove(themeClass);
    }
  }, [theme]);

  return props.children;
}

Theme.displayName = 'Theme';

Theme.propTypes = {
  children: PropTypes.any,
};
