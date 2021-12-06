import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Paragraph.scss';


export default function Paragraph(props) {
  const {
    children,
    className,
    under,
  } = props;

  const classes = classNames('Paragraph', {
    [`Paragraph--under-${under}`]: under,
  }, className);

  return (
    <p className={classes}>
      {children}
    </p>
  );
}

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  under: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
};
