import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';

export class PI extends Node
{
  get type(): string
  {
    return NodeType.PI;
  }

  get string(): string
  {
    return "PI";
  }

  get result(): number
  {
    return Math.PI;
  }

  constructor()
  {
    super();
  }

  addChild(id: string, node: Node): Node
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
}
