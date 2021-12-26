import { Injectable } from '@angular/core';
import { Addition } from '../models/addition';
import { Division } from '../models/division';
import { E } from '../models/e';
import { Multiplication } from '../models/multiplication';
import { Node } from '../models/node';
import { Paren } from '../models/paren';
import { PI } from '../models/pi';
import { Power } from '../models/power';
import { Subtraction } from '../models/subtraction';
import { Value } from '../models/value';
import { Variable } from '../models/variable';
// @ts-ignore
import * as Parser from '../parser/formula-parser';
import { NodeType } from './../constants/node-type';
import { Function } from './../models/function';

const parse = Parser.parse;

@Injectable()
export class NodeManagerService
{
  Load(formula: string): Node
  {
    const parserResult = <Node>parse(formula);

    const root = this.regenerateNode(parserResult);

    return root;
  }

  regenerateNode(node: Node): Node
  {
    switch (node.type)
    {
      case NodeType.Number:
        return new Value((<Value>node).value);
      case NodeType.Variable:
        return new Variable((<Variable>node).name);
      case NodeType.Addition:
        return new Addition(this.regenerateNode((<Addition>node).left), this.regenerateNode((<Addition>node).right));
      case NodeType.Subtraction:
        return new Subtraction(this.regenerateNode((<Subtraction>node).left), this.regenerateNode((<Subtraction>node).right));
      case NodeType.Multiplication:
        return new Multiplication(this.regenerateNode((<Multiplication>node).left), this.regenerateNode((<Multiplication>node).right));
      case NodeType.Division:
        return new Division(this.regenerateNode((<Division>node).left), this.regenerateNode((<Division>node).right));
      case NodeType.Power:
        return new Power(this.regenerateNode((<Power>node).expression), this.regenerateNode((<Power>node).power));
      case NodeType.Paren:
        return new Paren(this.regenerateNode((<Paren>node).expression));
      case NodeType.PI:
        return new PI();
      case NodeType.E:
        return new E;
      case NodeType.Function:
        return new Function((<Function>node).name, (<Function>node).args.map((arg: Node) => this.regenerateNode(arg)));

      default:
        throw new Error(`Invalid node type ${ node.type }`);
    }
  }
}
