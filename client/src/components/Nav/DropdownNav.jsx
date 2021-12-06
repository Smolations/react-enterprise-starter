import classNames from 'classnames';
import { useCombobox } from 'downshift';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { routes } from 'pages';
import { Button } from '../Button';
import { Link } from '../Link';

import './DropdownNav.scss';
console.log('routes: %o', routes)

// rudimentary sort
const orderedRoutes = routes.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

export default function DropdownNav(props) {
  const {
    className,
  } = props;

  // const [query, setQuery] = useState('');
  // const [open, setOpen] = useState(false);
  const [inputItems, setInputItems] = useState(orderedRoutes);

  const classes = classNames('DropdownNav', {
    'DropdownNav--open': open,
  }, className);

  // import {items, menuStyles, comboboxStyles} from './utils'
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        orderedRoutes.filter((route) =>
          route.toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      )
    },
  })

  return (
    <>
      <label {...getLabelProps()}>Choose an element:</label>
      <div className="" {...getComboboxProps()}>
        <input {...getInputProps()} />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label={'toggle menu'}
        >
          &#8595;
        </button>
      </div>
      <ul {...getMenuProps()} className="">
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
              }
              key={`${item}${index}`}
              {...getItemProps({item, index})}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );









  function handleClick() {
    setOpen(!open);
  }


  return (
    <nav className={classes}>
      <ul className="DropdownNav--items">
        {orderedRoutes.map((route) => (
          <li key={route.config.path}>
            <Link to={route.config.path}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>

      <Button onClick={handleClick}>v</Button>
    </nav>
  );
}

DropdownNav.displayName = 'DropdownNav';

DropdownNav.propTypes = {
  className: PropTypes.string,
};
