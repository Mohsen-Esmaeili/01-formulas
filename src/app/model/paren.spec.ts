import { NodeType } from '../constants/node-type';
import { Addition } from './addition';
import { Paren } from './paren';
import { Value } from './value';

describe('Paren', () =>
{
  it('Constructor', () =>
  {
    const node = new Paren(new Value(7));

    expect(node).not.toBeNull();
  });

  it('Remove addition expression', () =>
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
