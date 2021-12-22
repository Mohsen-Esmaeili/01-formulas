import { EmptyNode } from './empty-node';

describe('EmptyNode', () =>
{
  it('Constructor', () =>
  {
    const node = new EmptyNode();

    expect(node).not.toBeNull();
  });
});
