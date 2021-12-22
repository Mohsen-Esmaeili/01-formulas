import { NodeType } from '../constants/node-type';
import { Division } from './division';
import { Paren } from './paren';
import { Value } from './value';

describe('Division', () =>
{
  it('Constructor', () =>
  {
    const node = new Division(new Value(5), new Value(7));

    expect(node).not.toBeNull();
  });

  it("Should has valid id", () =>
  {
    // arrange
    const node = new Division(new Value(3), new Value(5));

    // check
    expect(node.id).not.toBeNull();
  });

  it('Get correct string', () =>
  {
    // arrange
    const node = new Division(new Value(7), new Value(10));

    // check
    expect(node.getString()).toEqual('7 / 10');
  });

  it('Remove left child with one level', () =>
  {
    // arrange
    const node = new Division(new Value(5), new Value(7));

    // act
    node.removeChildById(node.left.id);

    // check
    expect(node.left.type).toEqual(NodeType.Empty);
    expect(node.right.type).not.toEqual(NodeType.Empty);
  });

  it('Remove right child with one level', () =>
  {
    // arrange
    const node = new Division(new Value(5), new Value(7));

    // act
    node.removeChildById(node.right.id);

    // check
    expect(node.right.type).toEqual(NodeType.Empty);
    expect(node.left.type).toEqual(NodeType.Number);
  });

  it('Remove left child with from second level', () =>
  {
    // arrange
    const nodeToDelete = new Division(new Value(4), new Value(8));
    const expression = new Division(nodeToDelete, new Value(9));
    const node = new Paren(expression);

    // act
    node.removeChildById(nodeToDelete.left.id);

    // check
    expect((((node as Paren).expression as Division).left as Division).left.type).toEqual(NodeType.Empty);
  });

  it('Remove right child with from second level', () =>
  {
    // arrange
    const nodeToDelete = new Division(new Value(4), new Value(8));
    const expression = new Division(new Value(9), nodeToDelete);
    const node = new Paren(expression);

    // act
    node.removeChildById(nodeToDelete.right.id);

    // check
    expect((((node as Paren).expression as Division).right as Division).right.type).toEqual(NodeType.Empty);
  });
});
