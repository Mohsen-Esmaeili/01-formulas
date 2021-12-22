import { NodeType } from './../constants/node-type';
import { Node } from './node';
export class EmptyNode extends Node
{
  get type(): string
  {
    return NodeType.Empty;
  }

  removeChildById(id: string): Node
  {
    return this;
  }

  getString(): string
  {
    return "_EMPTY_";
  }

  getNode(string: Node): Node
  {
    return this;
  }
}
