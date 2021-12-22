import { NodeType } from '../constants/node-type';
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
  removeChildById(id: string): Node
  {
    throw new Error('Method not implemented.');
  }
}
