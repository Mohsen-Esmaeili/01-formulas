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

  addChild(id: string, node: Node): Node
  {
    this.expression.addChild(id, node);
    return this;
  }

  removeChildById(id: string): Node
  {
    if (this.expression.id === id)
    {
      this.expression = new EmptyNode();
    }

    return this;
  }

  getString(): string
  {
    return `(${ this.expression.getString() })`;
  }

  getValue(): number
  {
    return this.expression.getValue();
  }
}
