import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// import { routes } from 'pages';
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
    routes,
  } = props;

  const classes = classNames('Nav', className);

  // likely need a map, based on routes, to use for menu names..
  // a generator function of some sort would serve this purpose..
  return (
    <nav className={classes}>
      <ul className="Nav--list">
        {routes[0].children
          .filter((route) => (route.nav !== false))
          .map((route) => (
            <li key={route.path}>
              <Link to={route.path}>
                {route.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

Nav.displayName = 'Nav';

Nav.propTypes = {
  className: PropTypes.string,
};
