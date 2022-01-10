import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';
import { Power } from './power';
import { Value } from './value';

export class Function extends Node
{
  get type(): string
  {
    return NodeType.Function;
  }

  get string(): string
  {
    return `${ this.name }(${ this.args.map((arg: Node) => arg.string).join(', ') })`;
  }

  get result(): number
  {
    switch (this.name)
    {
      case 'SQRT':
        return Math.sqrt(this.args[0].result);
      case 'MAX':
        return Math.max(...this.args.map((arg: Node) => arg.result));
      case 'MIN':
        return Math.min(...this.args.map((arg: Node) => arg.result));
      case 'SQR':
        return new Power(this.args[0], new Value(2)).result;

      default:
        throw new Error(`Function is not valid. Function: ${ this.name }`);
    }
  }

  constructor(public name: string, public args: Array<Node>)
  {
    super();
  }

  addChild(id: string, node: Node): Node
  {
    let updated = false;
    this.args.forEach((arg: Node) =>
    {
      if (arg.id === id)
      {
        arg = node;
        updated = true;
      }
    });

    if (!updated)
    {
      this.args.push(node);
    }

    return this;
  }

  updateNode(id: string, node: Node): Node
  {
    debugger;
    const newArgs = new Array<Node>();
    this.args.forEach((arg: Node) =>
    {
      if (arg.id === id)
      {
        newArgs.push(node);
      } else
      {
        newArgs.push(arg);
      }
    });
    this.args = newArgs;
    return this;
  }

  removeChildById(id: string): Node
  {
    this.args.forEach((arg: Node) =>
    {
      if (arg.id === id)
      {
        arg = new EmptyNode();
      }
    });

    return this;
  }
}
