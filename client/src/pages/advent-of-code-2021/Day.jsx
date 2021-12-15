import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { Link } from 'components/Link';
import { Page } from 'components/Page';

import Day1 from './Day1';
import Day2 from './Day2';


/**
 * Literally only exists to pick the appropriate day component.
 */
export default function Day() {
  const days = [
    Day1,
    Day2,
  ];
  const { day } = useParams();

  const DayComponent = days[day - 1];

  return (
    <DayComponent />
  );
}
