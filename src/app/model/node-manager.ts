import { NodeModel } from './../models/node.model';
import { Node } from './node';
import { Power } from "./power";
import { Value } from "./value";

export class NodeManager
{
  static Load(astModel: NodeModel): Node
  {
    if (astModel.left)
    {
      return this.Load(astModel.left);
    }

    if (astModel.right)
    {
      return this.Load(astModel.right);
    }
    const root = new Power(new Value(2), new Value(3));

    return root;
  }
}

// let node = NodeManager.Load();
// console.log(node);
