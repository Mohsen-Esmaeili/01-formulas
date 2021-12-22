import { NodeType } from './../constants/node-type';
import { Addition } from './addition';
import { Node } from './node';
import { Value } from './value';

describe('Node', () =>
{
  it('Load simple expression', () =>
  {
    // arrange
    const formula = '2 + 3';

    // act
    const node = Node.load(formula);
    console.log(node);

    // check
    const left = <Value>(<Addition>node).left;
    const right = <Value>(<Addition>node).right;

    expect(node).not.toBeNull();
    expect(node.type).toEqual(NodeType.Addition);
    expect(left.value).toEqual(2);
    expect(right.value).toEqual(3);
  });
});

