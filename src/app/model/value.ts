import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';
export class Value extends Node
{
  get type(): string
  {
    return NodeType.Number;
  }

  constructor(public value: number)
  {
    super();
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
    return this.value.toString();
  }

  getNode(string: Node): Node
  {
    return this;
  }
}
