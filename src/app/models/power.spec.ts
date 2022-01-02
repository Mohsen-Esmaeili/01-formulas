import { NodeType } from '../constants/node-type';
import { Addition } from './addition';
import { Power } from './power';
import { Value } from './value';
import { Variable } from './variable';

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

  it('Get correct string', () =>
  {
    // arrange
    const node = new Power(new Value(7), new Value(10));

    // check
    expect(node.string).toEqual('7 ^ 10');
  });

  it('Add new node to expression of power', () =>
  {
    // arrange
    const newNode = new Addition(new Value(5), new Variable('$a'));
    const expressionNode = new Value(5);
    const node = new Power(expressionNode, new Value(8));

    // act
    node.addChild(expressionNode.id, newNode);

    // check
    expect(node.expression).toEqual(newNode);
  });

  it('Add new node to power of child', () =>
  {
    // arrange
    const newNode = new Addition(new Value(5), new Variable('$a'));
    const powerNode = new Value(5);
    const node = new Power(new Value(8), powerNode);

    // act
    node.addChild(powerNode.id, newNode);

    // check
    expect(node.power).toEqual(newNode);
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
});
