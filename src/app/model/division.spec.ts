import { NodeType } from '../constants/node-type';
import { Division } from './division';
import { Value } from './value';

describe('Division', () =>
{
  it('Constructor', () =>
  {
    const node = new Division(new Value(5), new Value(7));

    expect(node).not.toBeNull();
  });

  it('Remove left child with one level', () =>
  {
    // arrange
    const node = new Division(new Value(5), new Value(7));

    // act
    node.removeChildById(node.left.id);

    // check
    expect(node.left.type).toEqual(NodeType.Empty);
  });
});
