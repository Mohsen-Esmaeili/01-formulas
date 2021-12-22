import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';

export class Variable extends Node
{
  get type(): string
  {
    return NodeType.Variable;
  }

  constructor(public name: string)
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
    return this.name;
  }
}
