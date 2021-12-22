import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';

export class Multiplication extends Node
{
  get type(): string
  {
    return NodeType.Multiplication;
  }

  constructor(public left: Node, public right: Node)
  {
    super();
  }

  removeChildById(id: string): Node
  {
    if (this.left.id === id)
    {
      this.left = new EmptyNode();
    } else
    {
      this.left = this.left.removeChildById(id);
    }
    return this;
  }

  getString(): string
  {
    return "";
  }

  getNode(string: Node): Node
  {
    return this;
  }
}
