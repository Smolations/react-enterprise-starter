import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Link as RouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

import './Link.scss';


/**
 * Gain full control over all links in the app, including
 * external and routing.
 */
export default function Link(props) {
  const {
    children,
    className,
    external,
    reloadDocument,
    to,
    ...linkProps
  } = props;

  const isExternal = reloadDocument || external;
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const classes = classNames('Link', {
    'Link--active': match,
    'Link--external': isExternal,
  }, className);

  return (
    <RouterLink
      {...linkProps}
      to={to}
      className={classes}
      reloadDocument={isExternal}
    >
      {children}
    </RouterLink>
  );
}

Link.displayName = 'Link';

Link.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  external: PropTypes.bool,
  ...RouterLink.propTypes
};

Link.defaultProps = {
  external: false,
};
