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

  getString(): string
  {
    return `${ this.name }(${ this.args.map((arg: Node) => arg.getString()).join(', ') })`;
  }

  getValue(): number
  {
    switch (this.name)
    {
      case 'SQRT':
        return Math.sqrt(this.args[0].getValue());
      case 'MAX':
        return Math.max(...this.args.map((arg: Node) => arg.getValue()));
      case 'MIN':
        return Math.min(...this.args.map((arg: Node) => arg.getValue()));
      case 'SQR':
        return new Power(this.args[0], new Value(2)).getValue();

      default:
        throw new Error(`Function is not valid. Function: ${ this.name }`);
    }
  }
}
