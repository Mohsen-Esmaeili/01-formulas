import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';

export class Variable extends Node
{
  value: number = 2;

  get type(): string
  {
    return NodeType.Variable;
  }

  constructor(public name: string)
  {
    super();
  }

  override addChild(id: string, node: Node): Node
  {
    return this;
  }

  removeChildById(id: string): Node
  {
    if (this.id === id)
    {
      return new EmptyNode();
    }
    return this;
  }

  getString(): string
  {
    return this.name;
  }

  getValue(): number
  {
    return this.value;
  }
}
