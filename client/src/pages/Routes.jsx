import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { RegionalStateProvider } from 'state/regional';

import { Home } from './home';
import { SimpleStateDemo } from './simple-state-demo';
import { Theming } from './theming';
import { Typography } from './typography';


export const routes = [
  {
    nav: true,
    name: 'Home',
    config: {
      path: '/',
      element: <Home />,
    },
    // children: [{ path: "tasks", element: <DashboardTasks /> }],
    // index: false,
    // caseSensitive: false,
  },
  {
    nav: true,
    name: 'Typography',
    config: {
      path: '/typography',
      element: <Typography />,
    },
  },
  {
    nav: true,
    name: 'Theming',
    config: {
      path: '/theming',
      element: <Theming />,
    },
  },
  {
    nav: true,
    name: 'Simple State Demo',
    config: {
      path: '/simple-state-demo',
      element: (
        <RegionalStateProvider>
          <SimpleStateDemo />
        </RegionalStateProvider>
      ),
    },
  },
].map((route) => {
  const PageLayout = route.layout || Layout;
  const element = (
    <PageLayout>
      {route.config.element}
    </PageLayout>
  );

  return {
    ...route,
    config: {
      ...route.config,
      element,
    },
  };
});

export default function Routes() {
  const routeConfigs = routes.map((route) => route.config);
  const element = useRoutes(routeConfigs);
  return element;
}
