import React from 'react';

import { Code } from 'components/Code';
import { Header } from 'components/Header';
import { Link } from 'components/Link';
import { Paragraph } from 'components/Paragraph';

import data from './day1-data';


export default function Day2() {
  function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
  }

  function part2() {
    console.groupCollapsed('[part2]');
    // keep track of previous sum
    // if current sum > previous sum, add to `count`
    const count = data.reduce((total, num, ndx) => {
      console.log('total: %o', total);
      console.log('num: %o', num);
      console.log('ndx: %o', ndx);

      if (ndx < 3) {
        return 0;
      }

      const previousSum = sum(
        data[ndx - 3],
        data[ndx - 2],
        data[ndx - 1],
      );
      console.log('previousSum: %o + %o + %o = %o', data[ndx - 3], data[ndx - 2], data[ndx - 1], previousSum);

      const currentSum = sum(
        data[ndx - 2],
        data[ndx - 1],
        num
      );
      console.log('currentSum: %o + %o + %o = %o', data[ndx - 2], data[ndx - 1], num, currentSum);

      return currentSum > previousSum ? total + 1 : total;
    }, 0);

    console.log('count: %o', count);
    console.groupEnd();
  }


  return (
    <>
      <Paragraph>
        <Link external to="https://adventofcode.com/2021/day/2">
          https://adventofcode.com/2021/day/2
        </Link>
      </Paragraph>

      <Header as="h3" heading="Part 2" />

      <Paragraph>
        Considering every single measurement isn't as useful as you expected: there's just too much noise in the data. Instead, consider sums of a three-measurement sliding window. Again considering the above example:
      </Paragraph>
      <Code block>
        {`
        199  A
        200  A B
        208  A B C
        210    B C D
        200  E   C D
        207  E F   D
        240  E F G
        269    F G H
        260      G H
        263        H
        `}
      </Code>
      <Paragraph>
        Start by comparing the first and second three-measurement windows. The measurements in the first window are marked A (199, 200, 208); their sum is <Code>199 + 200 + 208 = 607</Code>. The second window is marked B (200, 208, 210); its sum is 618. The sum of measurements in the second window is larger than the sum of the first, so this first comparison increased.
      </Paragraph>
      <Paragraph>
        Your goal now is to count the number of times the sum of measurements in this sliding window increases from the previous sum. So, compare A with B, then compare B with C, then C with D, and so on. Stop when there aren't enough measurements left to create a new three-measurement sum. In the above example, the sum of each three-measurement window is as follows:
      </Paragraph>
      <Code block>
        {`
        A: 607 (N/A - no previous sum)
        B: 618 (increased)
        C: 618 (no change)
        D: 617 (decreased)
        E: 647 (increased)
        F: 716 (increased)
        G: 769 (increased)
        H: 792 (increased)
        `}
      </Code>
      <Paragraph>
        In this example, there are 5 sums that are larger than the previous sum.

        Consider sums of a three-measurement sliding window.
        <strong>How many sums are larger than the previous sum?</strong>
      </Paragraph>
      {part2()}
      <Paragraph>
        Answer is: <Code>1653</Code>
      </Paragraph>
    </>
  );
}
