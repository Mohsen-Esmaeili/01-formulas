import { NodeType } from '../constants/node-type';
import { Node } from './node';

export class Subtraction extends Node
{
  get type(): string
  {
    return NodeType.Subtraction;
  }
  removeChildById(id: string): Node
  {
    return this;
  }
  left: Node;
  right: Node;
}
