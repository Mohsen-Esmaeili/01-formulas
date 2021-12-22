import { NodeType } from './../constants/node-type';
import { Addition } from './addition';
import { Value } from './value';

describe('Addition', () =>
{
  it('Constructor', () =>
  {
    const node = new Addition(new Value(5), new Value(7));

    expect(node).not.toBeNull();
  });

  it('Remove Child', () =>
  {
    // arrange
    const node = new Addition(new Value(5), new Value(7));
    // act
    node.removeChildById(node.left.id);

    expect(node.left.type).toEqual(NodeType);
  });
});
