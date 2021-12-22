import { NodeType } from '../constants/node-type';
import { Node } from './node';

export class Division extends Node
{
  get type(): string
  {
    return NodeType.Division;
  }
  removeChildById(id: string): Node
  {
    throw new Error('Method not implemented.');
  }
  left: Node;
  right: Node;
}
