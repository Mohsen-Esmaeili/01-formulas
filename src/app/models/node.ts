// @ts-ignore
import uuidv4 from '../utils/uuid.js';
export abstract class Node
{
  id: string;

  abstract get type(): string;

  constructor()
  {
    this.id = uuidv4();
  }

  abstract addChild(id: string, node: Node): Node;

  abstract removeChildById(id: string): Node;

  abstract getString(): string;
}

