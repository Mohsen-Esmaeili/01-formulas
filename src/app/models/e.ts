import { NodeType } from '../constants/node-type';
import { Node } from './node';
export class E extends Node
{
  get type(): string
  {
    return NodeType.E;
  }

  constructor()
  {
    super();
  }

  addChild(id: string, node: Node): Node
  {
    return this;
  }

  removeChildById(id: string): Node
  {
    return this;
  }

  getString(): string
  {
    return "E";
  }

  getValue(): number
  {
    return Math.E;
  }
}
