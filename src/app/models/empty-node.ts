import { NodeType } from '../constants/node-type';
import { Node } from './node';
export class EmptyNode extends Node
{
  get type(): string
  {
    return NodeType.Empty;
  }

  addChild(id: string, node: Node): Node
  {
    debugger;
    if (this.id === id)
    {
      return node;
    }

    return this;
  }

  removeChildById(id: string): Node
  {
    return this;
  }

  getString(): string
  {
    return "_EMPTY_";
  }
}
