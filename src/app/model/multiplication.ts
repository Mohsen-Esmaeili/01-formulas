import { NodeType } from '../constants/node-type';
import { Node } from './node';

export class Multiplication extends Node
{
  get type(): string
  {
    return NodeType.Multiplication;
  }
  removeChildById(id: string): Node
  {
    throw new Error('Method not implemented.');
  }
  left: Node;
  right: Node;
}
