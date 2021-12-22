import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';

export class Addition extends Node
{
  get type(): string
  {
    return NodeType.Addition;
  }

  constructor(public left: Node, public right: Node)
  {
    super();
  }

  override removeChildById(id: string): Node
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
    return `${ this.left.getString() } + ${ this.right.getString() }`;
  }

  getNode(string: Node): Node
  {
    return this;
  }
}
