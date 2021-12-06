import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Header.scss';

export default function Header(props) {
  const {
    as: HeadingElement,
    children,
    className,
    heading,
  } = props;

  const classes = classNames('Header', className);

  return (
    <header className={classes}>
      <HeadingElement className={`Header--heading-${HeadingElement}`}>
        {heading}
      </HeadingElement>

      {children}
    </header>
  );
}

Header.displayName = 'Header';

Header.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  children: PropTypes.any,
  className: PropTypes.string,
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

Header.defaultProps = {
  as: 'h2',
};
