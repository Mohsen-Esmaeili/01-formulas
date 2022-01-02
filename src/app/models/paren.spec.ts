import { NodeType } from '../constants/node-type';
import { Addition } from './addition';
import { Division } from './division';
import { Multiplication } from './multiplication';
import { Paren } from './paren';
import { Power } from './power';
import { Subtraction } from './subtraction';
import { Value } from './value';
import { Variable } from './variable';

describe('Paren', () =>
{
  it('Constructor', () =>
  {
    const node = new Paren(new Value(7));

    expect(node).not.toBeNull();
  });

  it("Should has valid id", () =>
  {
    // arrange
    const node = new Paren(new Addition(new Value(3), new Value(5)));

    // check
    expect(node.id).not.toBeNull();
  });

  it('Get correct string', () =>
  {
    // arrange
    const node = new Paren(new Addition(new Value(7), new Value(10)));

    // check
    expect(node.string).toEqual('(7 + 10)');
  });

  it('Get complex string', () =>
  {
    // arrange
    const node = new Division(new Paren(new Addition(new Paren(new Multiplication(new Value(6), new Variable('$b'))), new Paren(new Subtraction(new Variable('$a'), new Value(5))))), new Power(new Value(8), new Value(2)));

    // check
    expect(node.string).toEqual('((6 * $b) + ($a - 5)) / 8 ^ 2');
  });

  it('Remove addition expression with one level', () =>
  {
    // arrange
    const additionNode = new Addition(new Value(5), new Value(7));
    const parenNode = new Paren(additionNode);

    // act
    parenNode.removeChildById(additionNode.id);

    // check
    expect(parenNode.expression.type).toEqual(NodeType.Empty);
  });
});
