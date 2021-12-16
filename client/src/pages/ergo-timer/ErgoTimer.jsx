import React from 'react';

import { Code } from 'components/Code';
import { Header } from 'components/Header';
import { Page } from 'components/Page';
import { Paragraph } from 'components/Paragraph';


export default function ErgoTimer(props) {
  return (
    <Page className="ErgoTimer" heading="ErgoTimer">
      <Paragraph>
        Finally, a chance to check out <Code>Temporal</Code>. Unfortunately,
        a polyfill is required. Small price to pay for a <Code>Date</Code>
        destroyer!
      </Paragraph>


    </Page>
  );
}
