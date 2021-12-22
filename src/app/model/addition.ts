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
    // Explore in the left side
    if (this.left.id === id)
    {
      this.left = new EmptyNode();
    } else
    {
      this.left = this.left.removeChildById(id);
    }

    // Explore in the right side
    if (this.right.id === id)
    {
      this.right = new EmptyNode();
    } else
    {
      this.right = this.right.removeChildById(id);
    }

    return this;
  }

  getString(): string
  {
    return `${ this.left.getString() } + ${ this.right.getString() }`;
  }
}
