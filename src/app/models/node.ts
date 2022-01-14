// @ts-ignore
import uuidv4 from '../utils/uuid.js';
export abstract class Node
{
  id: string; // each node has its own id and it used to find the node to delete or update

  abstract get type(): string; // each node has its own type such as Function, Addition, Variable, and etc

  abstract get string(): string; // For producing the total expression as string each node  should generate its own expression as string

  abstract get result(): number; // For calculating the result in a hirarcy  

  constructor()
  {
    this.id = uuidv4();
  }

  abstract addChild(id: string, node: Node): Node;

  abstract updateNode(id: string, node: Node): Node;

  abstract removeChildById(id: string): Node;
}

