import { Value } from './value';

describe('Value', () =>
{
  it('Constructor', () =>
  {
    const node = new Value(7);

    expect(node).not.toBeNull();
  });
});
