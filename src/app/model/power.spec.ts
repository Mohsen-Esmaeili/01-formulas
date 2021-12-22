import { NodeType } from '../constants/node-type';
import { Addition } from './addition';
import { Paren } from './paren';
import { Power } from './power';
import { Value } from './value';

describe('Power', () =>
{
  it('Constructor', () =>
  {
    const node = new Power(new Value(5), new Value(7));

    expect(node).not.toBeNull();
  });

  it("Should has valid id", () =>
  {
    // arrange
    const node = new Power(new Value(3), new Value(5));

    // check
    expect(node.id).not.toBeNull();
  });

  it('Remove expression from power from power expression with one level', () =>
  {
    // arrange
    const node = new Power(new Value(5), new Value(7));

    // act
    node.removeChildById(node.expression.id);

    // check
    expect(node.expression.type).toEqual(NodeType.Empty);
    expect(node.power.type).not.toEqual(NodeType.Empty);
  });

  it('Remove power from power expression with one level', () =>
  {
    // arrange
    const node = new Power(new Value(7), new Value(6));

    // act
    node.removeChildById(node.power.id);

    // check
    expect(node.power.type).toEqual(NodeType.Empty);
    expect(node.expression.type).not.toEqual(NodeType.Empty);
  });

  it('Remove expression from power expression from second level', () =>
  {
    // arrange
    const nodeToBeDeleted = new Power(new Value(4), new Value(5));
    const expression = new Addition(nodeToBeDeleted, new Value(8));
    const node = new Paren(expression);

    // act
    node.removeChildById(nodeToBeDeleted.expression.id);

    // check
    expect((((node as Paren).expression as Addition).left as Power).expression.type).toEqual(NodeType.Empty);
  });

  it('Remove power from power expression from second level', () =>
  {
    // arrange
    const nodeToBeDeleted = new Power(new Value(4), new Value(5));
    const expression = new Addition(new Value(8), nodeToBeDeleted);
    const node = new Paren(expression);

    // act
    node.removeChildById(nodeToBeDeleted.power.id);

    //check
    expect((((node as Paren).expression as Addition).right as Power).power.type).toEqual(NodeType.Empty);
  });
});
