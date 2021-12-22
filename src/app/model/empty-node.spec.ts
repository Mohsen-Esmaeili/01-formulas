import { EmptyNode } from './empty-node';

describe('EmptyNode', () =>
{
  it('Constructor', () =>
  {
    const node = new EmptyNode();

    expect(node).not.toBeNull();
  });

  it("Should has valid id", () =>
  {
    // arrange
    const node = new EmptyNode();

    // check
    expect(node.id).not.toBeNull();
  });
});
