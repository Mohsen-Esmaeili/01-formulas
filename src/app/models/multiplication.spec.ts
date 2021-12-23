import { NodeType } from '../constants/node-type';
import { Multiplication } from './multiplication';
import { Paren } from './paren';
import { Value } from './value';

describe('Multiplication', () =>
{
  it('Constructor', () =>
  {
    const node = new Multiplication(new Value(5), new Value(7));

    expect(node).not.toBeNull();
  });

  it("Should has valid id", () =>
  {
    // arrange
    const node = new Multiplication(new Value(3), new Value(5));

    // check
    expect(node.id).not.toBeNull();
  });

  it('Get correct string', () =>
  {
    // arrange
    const node = new Multiplication(new Value(7), new Value(10));

    // check
    expect(node.getString()).toEqual('7 * 10');
  });

  it('Remove left child with one level', () =>
  {
    // arrange
    const node = new Multiplication(new Value(5), new Value(7));

    // act
    node.removeChildById(node.left.id);

    // check
    expect(node.left.type).toEqual(NodeType.Empty);
    expect(node.right.type).not.toEqual(NodeType.Empty);
  });

  it('Remove right child with one level', () =>
  {
    // arrange
    const node = new Multiplication(new Value(5), new Value(7));

    // act
    node.removeChildById(node.right.id);

    // check
    expect(node.right.type).toEqual(NodeType.Empty);
    expect(node.left.type).not.toEqual(NodeType.Empty);
  });

  it('Remove left child with from second level', () =>
  {
    // arrange
    const nodeToDelete = new Multiplication(new Value(4), new Value(8));
    const expression = new Multiplication(nodeToDelete, new Value(9));
    const node = new Paren(expression);

    // act
    node.removeChildById(nodeToDelete.left.id);

    // check
    expect((<Multiplication>(<Multiplication>(<Paren>node).expression).left).left.type).toEqual(NodeType.Empty);
  });

  it('Remove right child with from second level', () =>
  {
    // arrange
    const nodeToDelete = new Multiplication(new Value(4), new Value(8));
    const expression = new Multiplication(new Value(9), nodeToDelete);
    const node = new Paren(expression);

    // act
    node.removeChildById(nodeToDelete.right.id);

    // check
    expect((<Multiplication>(<Multiplication>(<Paren>node).expression).right).right.type).toEqual(NodeType.Empty);
  });
});
