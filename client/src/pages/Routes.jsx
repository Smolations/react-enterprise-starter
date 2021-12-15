import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { RegionalStateProvider } from 'state/regional';

import { AdventOfCode2021, Day } from './advent-of-code-2021';
import { Home } from './home';
import { SimpleStateDemo } from './simple-state-demo';
import { Theming } from './theming';
import { Typography } from './typography';


// configure in such a way that menus can be nested
// as well.
// route metadata: nav, name
export const routes = [
  {
    element: <Layout />,
    children: [
      {
        nav: true,
        name: 'Home',
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        nav: true,
        name: 'Typography',
        path: '/typography',
        element: <Typography />,
      },
      {
        nav: true,
        name: 'Theming',
        path: '/theming',
        element: <Theming />,
      },
      {
        nav: true,
        name: 'AoC',
        path: '/advent-of-code-2021',
        element: <AdventOfCode2021 />,
        children: [
          {
            path: ':day',
            element: <Day />,
          }
        ],
      },
      {
        nav: true,
        name: 'Simple State Demo',
        path: '/simple-state-demo',
        element: (
          <RegionalStateProvider>
            <SimpleStateDemo />
          </RegionalStateProvider>
        ),
      },
    ],
  },
];

export default function Routes() {
  const element = useRoutes(routes);
  return element;
}
