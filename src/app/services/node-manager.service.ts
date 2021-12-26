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
    const parserResult = parse(formula);

    const root = this.regenerateNode(parserResult);

    return root;
  }

  regenerateNode(node: any): Node
  {
    switch (node.type)
    {
      case NodeType.Number:
        return new Value(node.value);
      case NodeType.Variable:
        return new Variable(node.name);
      case NodeType.Addition:
        return new Addition(this.regenerateNode(node.left), this.regenerateNode(node.right));
      case NodeType.Subtraction:
        return new Subtraction(this.regenerateNode(node.left), this.regenerateNode(node.right));
      case NodeType.Multiplication:
        return new Multiplication(this.regenerateNode(node.left), this.regenerateNode(node.right));
      case NodeType.Division:
        return new Division(this.regenerateNode(node.left), this.regenerateNode(node.right));
      case NodeType.Power:
        return new Power(this.regenerateNode(node.expression), this.regenerateNode(node.power));
      case NodeType.Function:
        return new Paren(new Function(node.name, node.arguments.map((arg: Node) => this.regenerateNode(arg))));
      case NodeType.Paren:
        return new Paren(this.regenerateNode(node.expression));
      case NodeType.PI:
        return new PI();
      case NodeType.E:
        return new E;

      default:
        throw new Error(`Invalid node type ${ node.type }`);
    }
  }
}
