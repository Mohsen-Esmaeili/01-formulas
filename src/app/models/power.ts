import { NodeType } from '../constants/node-type';
import { EmptyNode } from './empty-node';
import { Node } from './node';
import { Paren } from './paren';

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
    const newExpression = new Paren(new Power(this.expression, this.power));

    if (this.expression.id === id)
    {
      this.power = newExpression;
      this.expression = node;
    } else if (this.power.id === id)
    {
      this.expression = newExpression;
      this.power = node;
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
