import { NodeType } from '../constants/node-type';
import { Node } from './node';

export class Variable extends Node
{
  value: number;

  get type(): string
  {
    return NodeType.Variable;
  }

  get string(): string
  {
    return this.name;
  }

  get result(): number
  {
    return this.value ? this.value : 0;
  }

  constructor(public name: string)
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
