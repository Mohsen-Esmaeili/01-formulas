import { NodeType } from '../constants/node-type';
import { Node } from './node';

export class Paren extends Node
{
  get type(): string
  {
    return NodeType.Paren;
  }
  removeChildById(id: string): Node
  {
    throw new Error('Method not implemented.');
  }
  expression: Node;
}
