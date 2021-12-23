import { Injectable } from '@angular/core';
import { Node } from '../model/node';

@Injectable()
export class NodeManagerService
{
  Load(formula: string): Node
  {
    const root = Node.load(formula);
    return root;
  }
}
