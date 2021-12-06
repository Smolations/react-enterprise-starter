import classNames from 'classnames';
import React from 'react';

import { Button } from 'components/Button';
import { Code } from 'components/Code';
import { Checkbox } from 'components/Form';
import { Header } from 'components/Header';
import { Page } from 'components/Page';
import { Paragraph } from 'components/Paragraph';

import { useGlobalState, globalStateActions } from 'state/global';


export default function Theming(props) {
  const {
    className,
  } = props;

  const { setTheme } = globalStateActions;
  const classes = classNames('Theming', className);
  const [{ theme }, dispatch] = useGlobalState();
  const themeSwap = {
    light: 'dark',
    dark: 'orange',
    orange: 'light',
  };

  function handleThemeChangeClick() {
    dispatch(setTheme(themeSwap[theme]));
  }

  return (
    <Page className={classes}>
      <Header as="h2" heading="Theming" />
      <Paragraph>
        Here we test out theming, so it will be helpful to have some other
        elements on the page which utilize theme colors or need to be validated
        when theme switching. So, <Code>maybe a code element</Code> or something.
        Maybe <strong>some strong action</strong>. And, of course, there&lsquo;s
        a button down below. Sound good? <Checkbox />
      </Paragraph>
      <Code>
        &lt;Something className="this-sucks"&gt;
          inside the thing
        &lt;/Something&gt;
      </Code>
      <Paragraph>
        Current theme: <strong>{theme}</strong>
      </Paragraph>
      <Button onClick={handleThemeChangeClick}>
        Change Theme
      </Button>
    </Page>
  );
}
