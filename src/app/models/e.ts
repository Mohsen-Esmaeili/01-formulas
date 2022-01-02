import { NodeType } from '../constants/node-type';
import { Node } from './node';
export class E extends Node
{
  get type(): string
  {
    return NodeType.E;
  }

  get string(): string
  {
    return "E";
  }

  get result(): number
  {
    return Math.E;
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
}
