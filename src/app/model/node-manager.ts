import { Node } from './node';
import { Power } from "./power";
import { Value } from "./value";

export class NodeManager
{
  static Load(): Node
  {
    const root = new Power(new Value(2), new Value(3));

    return root;
  }
}

let node = NodeManager.Load();
console.log(node);
