import React from 'react';
import { Outlet } from 'react-router-dom';

import { Link } from 'components/Link';
import { Page } from 'components/Page';


export default function AdventOfCode2021() {
  // preferably a way to not manually link to each day..
  return (
    <Page className="AdventOfCode2021" heading="Advent Of Code 2021">
      <ul>
        <li>
          <Link to="1">1</Link>
          <Link to="2">2</Link>
        </li>
      </ul>

      <Outlet />
    </Page>
  );
}
