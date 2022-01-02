import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';
import { Paren } from './paren';

export class Division extends Node
{
  get type(): string
  {
    return NodeType.Division;
  }

  get string(): string
  {
    return `${ this.left.string } / ${ this.right.string }`;
  }

  get result(): number
  {
    return this.left.result / this.right.result;
  }

  constructor(public left: Node, public right: Node)
  {
    super();
  }

  addChild(id: string, node: Node): Node
  {
    const newExpression = new Paren(new Division(this.left, this.right));

    if (this.left.id === id)
    {
      if (this.left.type !== NodeType.Empty)
      {
        this.right = newExpression;
      }
      this.left = node;
    } else if (this.right.id === id)
    {
      if (this.right.type !== NodeType.Empty)
      {
        this.left = newExpression;
      }
      this.right = node;
    }

    return this;
  }

  removeChildById(id: string): Node
  {
    if (this.left.id === id)
    {
      this.left = new EmptyNode();
    } else if (this.right.id === id)
    {
      this.right = new EmptyNode();
    }

    return this;
  }
}
