import React from 'react';
import { Outlet } from 'react-router-dom';

import { Code } from 'components/Code';
import { Header } from 'components/Header';
import { Link } from 'components/Link';
import { Page } from 'components/Page';
import { Paragraph } from 'components/Paragraph';

import Day1 from './Day1';


export default function AdventOfCode2021() {
  return (
    <Page className="AdventOfCode2021" heading="Advent Of Code 2021">;
      <ul>
        <li>
          <Link to="/day1">1</Link>
        </li>
      </ul>

      <Day1 />
    </Page>
  );
}
