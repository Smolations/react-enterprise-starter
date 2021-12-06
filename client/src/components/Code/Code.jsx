import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { dark, prism as light } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useGlobalState } from 'state/global';

import './Code.scss';


SyntaxHighlighter.registerLanguage('jsx', jsx);

const customStyleAll = {
  padding: '0 0.2em',
  borderRadius: '5px',
};
const customStyleDark = {
  border: `0.15em solid var(--theme-background)`,
  backgroundColor: 'var(--theme-primary)',
};


export default function Code(props) {
  const {
    block,
    children,
    className,
    language,
  } = props;

  const [{ theme }] = useGlobalState();
  const classes = classNames('Code', {
    'Code--block': block,
  }, className);

  let themeStyles = light;
  let customStyle = customStyleAll;

  if (theme === 'dark') {
    themeStyles = dark;
    customStyle = { ...customStyle, ...customStyleDark };
  }


  return (
    <SyntaxHighlighter
      className={classes}
      language={language}
      style={themeStyles}
      customStyle={customStyle}
      showLineNumbers={block}
      PreTag={block ? 'pre' : 'span'}
    >
      {children}
    </SyntaxHighlighter>
  );
}

Code.displayName = 'Code';

Code.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  language: PropTypes.oneOf([
    'jsx',
    'javascript',
    'scss',
  ]),
};

Code.defaultProps = {
  block: false,
  language: 'jsx',
};
