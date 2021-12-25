import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';
export class E extends Node
{
  get type(): string
  {
    return NodeType.E;
  }

  constructor()
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
    return "E";
  }

  getValue(): number
  {
    return Math.E;
  }
}
