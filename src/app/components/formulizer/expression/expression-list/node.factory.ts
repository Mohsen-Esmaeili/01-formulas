import { NodeType } from './../../../../constants/node-type';
import { Addition } from './../../../../models/addition';
import { EmptyNode } from './../../../../models/empty-node';
import { Expression } from './../../../../models/expression';
import { Multiplication } from './../../../../models/multiplication';
import { Power } from './../../../../models/power';
import { Subtraction } from './../../../../models/subtraction';
import { Value } from './../../../../models/value';
import { Variable } from './../../../../models/variable';

export default function GetNode(expression: Expression)
{
  switch (expression.nodeType)
  {
    case NodeType.Number:
      return new Value(3);
    case NodeType.Variable:
      return new Variable('$a');
    case NodeType.Addition:
      return new Addition(new EmptyNode(), new EmptyNode());
    case NodeType.Subtraction:
      return new Subtraction(new EmptyNode(), new EmptyNode());
    case NodeType.Multiplication:
      return new Multiplication(new EmptyNode(), new EmptyNode());
    case NodeType.Power:
      return new Power(new EmptyNode(), new EmptyNode());

    default:
      throw new Error(`Invalid node type. NodeType = ${ expression.nodeType }`);
  }
}
