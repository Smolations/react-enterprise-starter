import React from 'react';

import { Code } from 'components/Code';
import { Header } from 'components/Header';
import { Page } from 'components/Page';

import List from './List.mdx';

import './Home.scss';

// for convenience; if a legit component, make it legit.
const code = (component) => (<Code>{`<${component} />`}</Code>);

export default function Home(props) {
  const topics = [
    { checked: true, topic: 'Webpack configuration without confusing conditionals' },
    { checked: true, topic: 'Comprehensive ESLint configuration (style-opinionated)' },
    { checked: true, topic: 'Jest component testing configuration and component tests!' },
    { checked: true, topic: 'File/Folder structure for a React project' },
    { checked: true, topic: 'General component architecture for design systems and/or enterprise apps' },
    { checked: true, topic: 'State management (global, regional, and local)' },
    { checked: true, topic: 'MDX support (so easy!)' },
    { checked: true, topic: <>CSS normalize (<Code>sanitize.css</Code> but <em>not</em> a pure reset)</> },
    { checked: true, topic: 'Dart-Sass SCSS loader config with token "magic seeding"' },
    { checked: true, topic: 'Live theming with SCSS tokens and css variables' },
    { checked: true, topic: <>Add {code('Code')} support for block-level code</> },
    { checked: true, topic: <>SPA routing (<Code>react-router-dom@v6</Code> including {code('Outlet')})</> },

    { checked: false, topic: 'Syntax highlighting for code snippets (with dynamic imports)' },
    { checked: false, topic: 'a11y built into webpack config to address accessibility' },
    { checked: false, topic: 'Custom hooks' },
    { checked: false, topic: 'React Portals - gateway to modal dialogs' },
    { checked: false, topic: <>Universal {code('Backdrop')} component</> },
    { checked: false, topic: <>Universal {code('Transition')} component</> },
    { checked: false, topic: <>Alternate {code('Layout')} with alternate nav system</> },
    { checked: false, topic: <>Examples of replacing <Code>moment.js</Code> with <Code>Temporal</Code></> },
    { checked: false, topic: <>Examples of interacting with the browser's <Code>indexedDB</Code></> },
    { checked: false, topic: 'Web/Service workers' },
    { checked: false, topic: 'Dynamic imports' },
    // { checked: true, topic: '' },
  ];

  return (
    <Page className="Home">
      <Header as="h2" heading="Home" />

      <List items={topics}>
          This project is a jumping off point for a simple, scalable React web
          app. It addresses many common architectural issues, such as:
      </List>
    </Page>
  );
}
