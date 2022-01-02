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

  get string(): string
  {
    return `${ this.expression.string } ^ ${ this.power.string }`;
  }

  get result(): number
  {
    return Math.pow(this.expression.result, this.power.result);
  }

  constructor(public expression: Node, public power: Node)
  {
    super();
  }

  addChild(id: string, node: Node): Node
  {
    const newExpression = new Paren(new Power(this.expression, this.power));

    if (this.expression.id === id)
    {
      if (this.expression.type !== NodeType.Empty)
      {
        this.power = newExpression;
      }
      this.expression = node;
    } else if (this.power.id === id)
    {
      if (this.power.type !== NodeType.Empty)
      {
        this.expression = newExpression;
      }
      this.power = node;
    }

    return this;
  }

  removeChildById(id: string): Node
  {
    if (this.expression.id === id)
    {
      this.expression = new EmptyNode();
    } else if (this.power.id === id)
    {
      this.power = new EmptyNode();
    }

    return this;
  }
}
