import { Power } from './power';
import { Value } from './value';

describe('Power', () =>
{
  it('Constructor', () =>
  {
    const node = new Power(new Value(5), new Value(7));

    expect(node).not.toBeNull();
  });
});
