import { NodeType } from '../constants/node-type';
import { Node } from './node';

export class Variable extends Node
{
  get type(): string
  {
    return NodeType.Variable;
  }
  constructor(public name: string)
  {
    super();
  }
  removeChildById(id: string): Node
  {
    return this;
  }
}
