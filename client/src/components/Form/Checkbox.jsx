import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Checkbox.scss';


export default function Checkbox(props) {
  const {
    children,
    className,
    checked,
    ...checkboxProps
  } = props;

  const classes = classNames('Checkbox', className);


  return (
    <label className={classes}>
      <input
        {...checkboxProps}
        className="Checkbox--input"
        type="checkbox"
        checked={checked}
        readOnly
      />

      <span>
        {children}
      </span>
    </label>
  );
}

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
};
