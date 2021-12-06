import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Header } from '../Header';

import './Page.scss';


/**
 * A generic page wrapper, ensuring all pages follow the same layout.
 */
export default function Page(props) {
  const {
    children,
    className,
    heading,
  } = props;

  const classes = classNames('Page', className);

  return (
    <div className={classes}>
      {heading && <Header as="h2" heading={heading} />}
      {children}
    </div>
  );
}

Page.displayName = 'Page';

Page.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  heading: PropTypes.string,
};
