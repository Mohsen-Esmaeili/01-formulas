import { Injectable } from '@angular/core';
import { Node } from '../model/node';

@Injectable({
  providedIn: "root"
})
export class NodeManager
{
  Load(formula: string): Node
  {
    const root = Node.load(formula);
    return root;
  }
}
