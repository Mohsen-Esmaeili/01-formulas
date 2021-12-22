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

  it("Should has valid id", () =>
  {
    // arrange
    const node = new Addition(new Value(3), new Value(5));

    // check
    expect(node.id).not.toBeNull();
  });

  it('Get correct string', () =>
  {
    // arrange
    const node = new Addition(new Value(7), new Value(10));

    // check
    expect(node.getString()).toEqual('7 + 10');
  });

  it('Remove left child with one level', () =>
  {
    // arrange
    const node = new Addition(new Value(5), new Value(7));

    // act
    node.removeChildById(node.left.id);

    // check
    expect(node.left.type).toEqual(NodeType.Empty);
    expect(node.right.type).not.toEqual(NodeType.Empty);
  });

  it('Remove right child with one level', () =>
  {
    // arrange
    const node = new Addition(new Value(7), new Value(6));

    // act
    node.removeChildById(node.right.id);

    // check
    expect(node.right.type).toEqual(NodeType.Empty);
    expect(node.left.type).not.toEqual(NodeType.Empty);
  });

  it('Remove left child from second level', () =>
  {
    // arrange
    const nodeToBeDeleted = new Addition(new Value(4), new Value(5));
    const expression = new Addition(nodeToBeDeleted, new Value(8));
    const node = new Paren(expression);

    // act
    node.removeChildById(nodeToBeDeleted.left.id);

    // check
    expect((((node as Paren).expression as Addition).left as Addition).left.type).toEqual(NodeType.Empty);
  });

  it('Remove right child from second level', () =>
  {
    // arrange
    const nodeToBeDeleted = new Addition(new Value(4), new Value(5));
    const expression = new Addition(new Value(8), nodeToBeDeleted);
    const node = new Paren(expression);

    // act
    node.removeChildById(nodeToBeDeleted.right.id);

    //check
    expect((((node as Paren).expression as Addition).right as Addition).right.type).toEqual(NodeType.Empty);
  });
});
