import React from 'react';

import { Button } from 'components/Button';
import { Code } from 'components/Code';
import { Header } from 'components/Header';
import { Page } from 'components/Page';
import { Paragraph } from 'components/Paragraph';

import { globalStateActions, useGlobalState } from 'state/global';
import { regionalStateActions, useRegionalState } from 'state/regional';

const { setFoo: setGlobalFoo } = globalStateActions;
const { setFoo: setRegionalFoo } = regionalStateActions;


/**
 * This page demonstrates how to use the context API and some react hooks to
 * manage state over a component tree. The main use case here is to avoid prop
 * drilling.
 *
 * In order to see which trees are being managed by each state getter/setter,
 * see `Routes.js` where routes are defined.
 *
 * @see https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
 */
export default function SimpleStateDemo() {
  const [{ foo: globalFoo }, globalDispatch] = useGlobalState();
  const [{ foo: regionalFoo }, regionalDispatch] = useRegionalState();

  function handleGlobalClick() {
    globalDispatch(
      setGlobalFoo(globalFoo === 'foo' ? 'bar' : 'foo'),
    );
  }

  function handleRegionalClick() {
    regionalDispatch(
      setRegionalFoo(regionalFoo === 'baz' ? 'pizzaz' : 'baz'),
    );
  }

  return (
    <Page className="SimpleStateDemo">
      <Header as="h2" heading="Simple State Demo" />
      <Paragraph>
        This demo uses two different pieces of state. One is accessed at the
        global level and its provider import can be located within
        <Code>App.js</Code>. The other is at the &ldquo;regional&rdquo; level
        (but can be set at any arbitrary level in the component tree)
        and is wrapped around this page within <Code>Routes.js</Code>. It
        demonstrates how simple state (with the Context API and hooks) can be
        used to create various layers of state. In this case, both states track
        a single value: <Code>foo</Code>.
      </Paragraph>
      <Paragraph>
        Current value of GLOBAL state value <Code>foo</Code>:{' '}
        <strong>{globalFoo}</strong>
      </Paragraph>
      <Paragraph>
        Current value of REGIONAL state value <Code>foo</Code>:{' '}
        <strong>{regionalFoo}</strong>
      </Paragraph>

      <Button onClick={handleGlobalClick}>
        Change GLOBAL state value
      </Button>
      <Button onClick={handleRegionalClick}>
        Change REGIONAL state value
      </Button>
    </Page>
  );
}
