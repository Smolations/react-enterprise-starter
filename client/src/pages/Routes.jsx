import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { RegionalStateProvider } from 'state/regional';

import { AdventOfCode2021, Day } from './advent-of-code-2021';
import { ErgoTimerPage } from './ergo-timer';
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
        name: 'Home',
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        name: 'Typography',
        path: '/typography',
        element: <Typography />,
      },
      {
        name: 'Theming',
        path: '/theming',
        element: <Theming />,
      },
      {
        name: 'ErgoTimer',
        path: '/ergo-timer',
        element: <ErgoTimerPage />,
      },
      {
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
        nav: false,
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
