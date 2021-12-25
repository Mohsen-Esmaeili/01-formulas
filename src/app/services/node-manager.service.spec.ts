import { NodeType } from "../constants/node-type";
import { Addition } from "../models/addition";
import { Value } from "../models/value";
import { NodeManagerService } from "./node-manager.service";

describe('Load manager', () =>
{
  it('Load simple expression', () =>
  {
    // arrange
    const service = new NodeManagerService();
    const formula = '2 + 3';

    // act
    const node = service.Load(formula);

    // check
    const left = <Value>(<Addition>node).left;
    const right = <Value>(<Addition>node).right;

    expect(node).not.toBeNull();
    expect(node.type).toEqual(NodeType.Addition);
    expect(left.value).toEqual(2);
    expect(right.value).toEqual(3);
  });

});
