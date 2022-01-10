import { NodeType } from '../constants/node-type';
import { Node } from './node';
export class EmptyNode extends Node
{
  get type(): string
  {
    return NodeType.Empty;
  }

  get string(): string
  {
    return "_EMPTY_";
  }

  get result(): number
  {
    return Number.MIN_VALUE;
  }

  addChild(id: string, node: Node): Node
  {
    return this;
  }

  updateNode(id: string, node: Node): Node
  {
    return this;
  }

  removeChildById(id: string): Node
  {
    return this;
  }
}
