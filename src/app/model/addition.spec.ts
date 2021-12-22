import { NodeType } from './../constants/node-type';
import { Addition } from './addition';
import { Paren } from './paren';
import { Value } from './value';

describe('Addition', () =>
{
  it('Constructor', () =>
  {
    const node = new Addition(new Value(5), new Value(7));

    expect(node).not.toBeNull();
  });

  it('Remove left child with one level', () =>
  {
    // arrange
    const node = new Addition(new Value(5), new Value(7));

    // act
    node.removeChildById(node.left.id);

    // check
    expect(node.left.type).toEqual(NodeType.Empty);
    expect(node.right.type).toEqual(NodeType.Number);
  });

  it('Remove right child', () =>
  {
    // arrange
    const node = new Addition(new Value(7), new Value(6));

    // act
    node.removeChildById(node.right.id);

    // check
    expect(node.right.type).toEqual(NodeType.Empty);
    expect(node.left.type).toEqual(NodeType.Number);
  });

  it('Remove left child from second level', () =>
  {
    // arrange
    const nodeToBeDeleted = new Addition(new Value(4), new Value(5));
    const expression = new Addition(nodeToBeDeleted, new Value(8));
    const node = new Paren(expression);

    // act
    node.removeChildById(nodeToBeDeleted.id);

    //check
    expect(expression.left.type).toEqual(NodeType.Empty);
    expect(expression.right.type).toEqual(NodeType.Number);
  });

  it('Remove right child from second level', () =>
  {
    // arrange
    const nodeToBeDeleted = new Addition(new Value(4), new Value(5));
    const expression = new Addition(new Value(8), nodeToBeDeleted);
    const node = new Paren(expression);

    // act
    node.removeChildById(nodeToBeDeleted.id);

    //check
    expect(expression.right.type).toEqual(NodeType.Empty);
    expect(expression.left.type).toEqual(NodeType.Number);
  });
});
