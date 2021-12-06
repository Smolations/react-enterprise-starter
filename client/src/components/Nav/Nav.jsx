import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { routes } from 'pages';
import { Link } from '../Link';

import './Nav.scss';


/**
 * A classic nav component. Nothing fancy, but it's got all the top level
 * routes linked. Implementation to determine current route is also
 * demonstrated.
 */
export default function Nav(props) {
  const {
    className,
  } = props;

  const classes = classNames('Nav', className);

  return (
    <nav className={classes}>
      <ul className="Nav--list">
        {routes.map((route) => (
          <li key={route.config.path}>
            <Link to={route.config.path}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Nav.displayName = 'Nav';

Nav.propTypes = {
  className: PropTypes.string,
};
