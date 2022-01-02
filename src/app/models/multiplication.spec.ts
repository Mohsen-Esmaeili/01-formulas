import { NodeType } from '../constants/node-type';
import { Multiplication } from './multiplication';
import { Value } from './value';
import { Variable } from './variable';

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
    expect(node.string).toEqual('7 * 10');
  });

  it('Add new node to left child', () =>
  {
    // arrange
    const newNode = new Multiplication(new Value(5), new Variable('$a'));
    const leftNode = new Value(5);
    const node = new Multiplication(leftNode, new Value(8));

    // act
    node.addChild(leftNode.id, newNode);

    // check
    expect(node.left).toEqual(newNode);
  });

  it('Add new node to right child', () =>
  {
    // arrange
    const newNode = new Multiplication(new Value(5), new Variable('$a'));
    const rightNode = new Value(5);
    const node = new Multiplication(new Value(8), rightNode);

    // act
    node.addChild(rightNode.id, newNode);

    // check
    expect(node.right).toEqual(newNode);
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
});
