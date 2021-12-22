// @ts-ignore
import * as Parser from '../parser/formula-parser';
// @ts-ignore
import uuidv4 from '../utils/uuid.js';
const parse = Parser.parse;
export abstract class Node
{
  id: string;

  abstract get type(): string;

  constructor()
  {
    this.id = uuidv4();
  }

  abstract removeChildById(id: string): Node;

  abstract getString(): string;

  static load(input: string): Node
  {
    return <Node>parse(input);
  };
}

