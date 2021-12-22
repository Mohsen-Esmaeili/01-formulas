import { NodeType } from '../constants/node-type';
import { Node } from './node';
export class Value extends Node
{
  get type(): string
  {
    return NodeType.Number;
  }

  constructor(public value: number)
  {
    super();
  }
  removeChildById(id: string): Node
  {
    return this;
  }
}
