import { NodeType } from '../constants/node-type';
import { Multiplication } from './multiplication';
import { Value } from './value';

describe('Multiplication', () =>
{
  it('Constructor', () =>
  {
    const node = new Multiplication(new Value(5), new Value(7));

    expect(node).not.toBeNull();
  });

  it('Remove left child with one level', () =>
  {
    // arrange
    const node = new Multiplication(new Value(5), new Value(7));

    // act
    node.removeChildById(node.left.id);

    // check
    expect(node.left.type).toEqual(NodeType.Empty);
  });
});
