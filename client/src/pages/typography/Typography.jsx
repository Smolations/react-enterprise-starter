import React from 'react';

import { Code } from 'components/Code';
import { Header } from 'components/Header';
import { Page } from 'components/Page';
import { Paragraph } from 'components/Paragraph';


export default function Typography(props) {
  return (
    <Page className="Typography" heading="Typography">
      <Paragraph>
        This page showcases some of the typography used throughout the site.
        <Code>Header</Code> and <Code>Paragraph</Code> components are paired in
        order to compare their font-size ratios and line-heights. Additionally,
        as you have no doubt noticed, the <Code>Code</Code> component also is
        on display.
      </Paragraph>


      {['h2', 'h3', 'h4', 'h5'].map((heading) => (
        <React.Fragment key={heading}>
          <hr />
          <Header as={heading} heading={`This is an ${heading}`} />
          <Paragraph under={heading}>
            This is a paragraph targeted under an {heading}.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            pellentesque convallis ipsum, <Code>at tincidunt magna</Code> luctus ut. Sed eu
            imperdiet arcu. Fusce vulputate laoreet scelerisque. Pellentesque
            efficitur viverra augue, eget tempus ipsum semper sit amet. Donec
            auctor, sem nec lacinia venenatis, lorem felis consectetur ex, nec
            vestibulum tellus justo nec est.
          </Paragraph>
          <Paragraph under={heading}>
            This is a paragraph targeted under an {heading}.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            pellentesque convallis ipsum, at tincidunt magna luctus ut. Sed eu
            imperdiet arcu. Fusce vulputate laoreet scelerisque. Pellentesque
            efficitur viverra augue, eget tempus ipsum semper sit amet. Donec
            auctor, sem nec lacinia venenatis, lorem felis consectetur ex, nec
            vestibulum tellus justo nec est.
          </Paragraph>
        </React.Fragment>
      ))}
    </Page>
  );
}
