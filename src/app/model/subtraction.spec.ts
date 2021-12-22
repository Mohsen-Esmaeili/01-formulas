import { NodeType } from '../constants/node-type';
import { Subtraction } from './subtraction';
import { Value } from './value';

describe('Subtraction', () =>
{
  it('Constructor', () =>
  {
    const node = new Subtraction(new Value(5), new Value(7));

    expect(node).not.toBeNull();
  });

  it('Remove left child with one level', () =>
  {
    // arrange
    const node = new Subtraction(new Value(5), new Value(7));

    // act
    node.removeChildById(node.left.id);

    // check
    expect(node.left.type).toEqual(NodeType.Empty);
  });
});
