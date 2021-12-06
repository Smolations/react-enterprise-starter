import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

// import './Button.scss';


const Button = forwardRef((props, ref) => {
  const {
    children,
    className,
    onClick,
    type,
  } = props;

  const classes = classNames('Button', className);

  return (
    <button
      ref={ref}
      className={classes}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
