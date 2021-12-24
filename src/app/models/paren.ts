import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';

export class Paren extends Node
{
  get type(): string
  {
    return NodeType.Paren;
  }

  constructor(public expression: Node)
  {
    super();
  }

  override addChild(id: string, node: Node): Node
  {
    return this;
  }

  removeChildById(id: string): Node
  {
    if (this.expression.id === id)
    {
      this.expression = new EmptyNode();
    } else
    {
      this.expression = this.expression.removeChildById(id);
    }
    return this;
  }

  getString(): string
  {
    return `(${ this.expression.getString() })`;
  }
}
