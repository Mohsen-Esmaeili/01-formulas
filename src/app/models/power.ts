import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';

export class Power extends Node
{
  get type(): string
  {
    return NodeType.Power;
  }

  constructor(public expression: Node, public power: Node)
  {
    super();
  }

  override addChild(id: string, node: Node): Node
  {
    // Explore in the power, expression object
    if (this.expression.id === id)
    {
      this.expression = node;
    } else
    {
      this.expression = this.expression.addChild(id, node);
    }

    // Explore in the power, power object
    if (this.power.id === id)
    {
      this.power = node;
    } else
    {
      this.power = this.power.addChild(id, node);
    }
    return this;
  }

  removeChildById(id: string): Node
  {
    // Explore in the power, expression object
    if (this.expression.id === id)
    {
      this.expression = new EmptyNode();
    } else
    {
      this.expression = this.expression.removeChildById(id);
    }

    // Explore in the power, power object
    if (this.power.id === id)
    {
      this.power = new EmptyNode();
    } else
    {
      this.power = this.power.removeChildById(id);
    }

    return this;
  }

  getString(): string
  {
    return `${ this.expression.getString() } ^ ${ this.power.getString() }`;
  }
}
