import React from 'react';

import { Code } from 'components/Code';
import { Header } from 'components/Header';
import { Link } from 'components/Link';
import { Paragraph } from 'components/Paragraph';

import data from './day1-data';


export default function Day1() {
  function part1() {
    console.groupCollapsed('[part1]');

    console.log('data: %o', data);
    const count = data.reduce((total, num, ndx) => {
      if (num === null) {
        return 0;
      }

      return num > data[ndx - 1] ? total + 1 : total;
    }, null);

    console.log('count: %o', count);
    console.groupEnd();
  }


  return (
    <>
      <Paragraph>
        <Link external to="https://adventofcode.com/2021/day/1">
          https://adventofcode.com/2021/day/1
        </Link>
      </Paragraph>

      <Header as="h3" heading="Part 1" />

      <Paragraph>
        You&apos;re minding your own business on a ship at sea when the
        overboard alarm goes off! You rush to see if you can help. Apparently,
        one of the Elves tripped and accidentally sent the sleigh keys flying
        into the ocean!
      </Paragraph>
      <Paragraph>
        Before you know it, you&apos;re inside a submarine the Elves keep ready
        for situations like this. It&apos;s covered in Christmas lights (because
        of course it is), and it even has an experimental antenna that should be
        able to track the keys if you can boost its signal strength high enough;
        there&apos;s a little meter that indicates the antenna&apos;s signal
        strength by displaying 0&ndash;50 <strong>stars</strong>.
      </Paragraph>
      <Paragraph>
        Your instincts tell you that in order to save Christmas, you&apos;ll
        need to get all fifty stars by December 25th.
      </Paragraph>
      <Paragraph>
        Collect stars by solving puzzles. Two puzzles will be made available on
        each day in the Advent calendar; the second puzzle is unlocked when you
        complete the first. Each puzzle grants one star. Good luck!
      </Paragraph>
      <Paragraph>
        As the submarine drops below the surface of the ocean, it automatically
        performs a sonar sweep of the nearby sea floor. On a small screen, the
        sonar sweep report (your puzzle input) appears: each line is a
        measurement of the sea floor depth as the sweep looks further and
        further away from the submarine.
      </Paragraph>
      <Paragraph>
        For example, suppose you had the following report:
      </Paragraph>
      <Code block>
        199
        200
        208
        210
        200
        207
        240
        269
        260
        263
      </Code>
      <Code block>
        {`
        199
        200
        208
        210
        200
        207
        240
        269
        260
        263
        `}
      </Code>
      <Paragraph>
        This report indicates that, scanning outward from the submarine, the
        sonar sweep found depths of 199, 200, 208, 210, and so on.
      </Paragraph>
      <Paragraph>
        The first order of business is to figure out how quickly the depth
        increases, just so you know what you&apos;re dealing with &mdash; you
        never know if the keys will get carried into deeper water by an ocean
        current or a fish or something.
      </Paragraph>
      <Paragraph>
        To do this, count the number of times a depth measurement increases from
        the previous measurement. (There is no measurement before the first
        measurement.) In the example above, the changes are as follows:
      </Paragraph>
      <Code block>
        {`
        199 (N/A - no previous measurement)
        200 (increased)
        208 (increased)
        210 (increased)
        200 (decreased)
        207 (increased)
        240 (increased)
        269 (increased)
        260 (decreased)
        263 (increased)
        `}
      </Code>
      <Paragraph>
        In this example, there are 7 measurements that are larger than the
        previous measurement.
      </Paragraph>
      <Paragraph>
        <strong>
          How many measurements are larger than the previous measurement?
        </strong>
      </Paragraph>
      {part1()}
      <Paragraph>
        Answer: <Code>1655</Code> (link to data?)
      </Paragraph>
    </>
  );
}
