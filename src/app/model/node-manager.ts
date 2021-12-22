import { NodeModel } from './../models/node.model';
import { Node } from './node';
import { Value } from "./value";

export class NodeManager
{
  static Load(astNode: NodeModel): Node
  {
    const root = new Value(6);

    return root;
  }
}
