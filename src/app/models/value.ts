import { NodeType } from '../constants/node-type';
import { Node } from './node';
export class Value extends Node
{
  get type(): string
  {
    return NodeType.Number;
  }

  get string(): string
  {
    return this.value.toString();
  }

  get result(): number
  {
    return this.value;
  }

  constructor(public value: number)
  {
    super();
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
