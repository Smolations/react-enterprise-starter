import { ErgoTimer } from '.';

export default {
  title: 'Components/ErgoTimer',
  component: ErgoTimer,
};


export function Usage(args) {
  return (<ErgoTimer {...args} />);
}

Usage.args = {};
