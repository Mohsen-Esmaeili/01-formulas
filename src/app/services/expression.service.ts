import { Injectable } from "@angular/core";
import { NodeType } from "../constants/node-type";
import { Addition } from "../models/addition";
import { Division } from "../models/division";
import { EmptyNode } from "../models/empty-node";
import { Expression } from "../models/expression";
import { Multiplication } from "../models/multiplication";
import { Node } from "../models/node";
import { Paren } from "../models/paren";
import { Power } from "../models/power";
import { Subtraction } from "../models/subtraction";
import { Value } from "../models/value";
import { Variable } from './../models/variable';

@Injectable()
export class ExpressionService
{
  getNode(newNodeType: NodeType, value: string = ""): Node
  {
    switch (newNodeType)
    {
      case NodeType.Addition:
        return new Paren(new Addition(new EmptyNode(), new EmptyNode()));
      case NodeType.Subtraction:
        return new Paren(new Subtraction(new EmptyNode(), new EmptyNode()));
      case NodeType.Multiplication:
        return new Paren(new Multiplication(new EmptyNode(), new EmptyNode()));
      case NodeType.Division:
        return new Paren(new Division(new EmptyNode(), new EmptyNode()));
      case NodeType.Power:
        return new Paren(new Power(new EmptyNode(), new EmptyNode()));
      case NodeType.Variable:
        return new Variable("$" + value);
      case NodeType.Number:
        return new Value(Number(value));

      default:
        throw new Error(`Invalid node type. NodeType = ${ newNodeType }`);
    }
  }

  getPositionId(node: Node, isInLeftSide: boolean): string
  {
    switch (node.type)
    {
      case NodeType.Addition:
        return isInLeftSide ? (<Addition>node).left.id : (<Addition>node).right.id;
      case NodeType.Subtraction:
        return isInLeftSide ? (<Subtraction>node).left.id : (<Subtraction>node).right.id;
      case NodeType.Multiplication:
        return isInLeftSide ? (<Multiplication>node).left.id : (<Multiplication>node).right.id;
      case NodeType.Division:
        return isInLeftSide ? (<Division>node).left.id : (<Division>node).right.id;
      case NodeType.Power:
        return isInLeftSide ? (<Power>node).expression.id : (<Power>node).power.id;

      default:
        throw new Error(`Invalid node type. NodeType: ${ node.type }`);
    }
  }

  load(): Array<Expression>
  {
    const result: Array<Expression> = [
      {
        id: 6,
        icon: "calculate",
        title: "Math Operations",
        children: [
          {
            id: 6,
            nodeType: NodeType.Addition,
            icon: "add",
            title: "Addition (+)",
            children: []
          },
          {
            id: 7,
            nodeType: NodeType.Subtraction,
            icon: "remove",
            title: "Subtraction (-)",
            children: []
          },
          {
            id: 8,
            nodeType: NodeType.Multiplication,
            icon: "clear",
            title: "Multiplication (*)",
            children: []
          },
          {
            id: 9,
            nodeType: NodeType.Subtraction,
            icon: "device_hub",
            title: "Division (/)",
            children: []
          },
          {
            id: 10,
            nodeType: NodeType.Power,
            icon: "superscript",
            title: "Power (^)",
            children: []
          }
        ]
      },
      {
        id: 13,
        icon: "task_alt",
        title: "Specific values",
        children: [
          {
            id: 1,
            icon: "numbers",
            nodeType: NodeType.Number,
            title: "Static Value",
            children: []
          },
          {
            id: 14,
            icon: "task_alt",
            title: "PI",
            children: []
          },
          {
            id: 15,
            icon: "task_alt",
            title: "E",
            children: []
          }
        ]
      },
      {
        id: 16,
        icon: "functions",
        title: "Specific functions",
        children: [
          {
            id: 17,
            icon: "functions",
            title: "SQRT",
            children: []
          },
          {
            id: 18,
            icon: "functions",
            title: "SQR",
            children: []
          }
        ]
      },
      {
        id: 19,
        icon: "input",
        title: "Variables",
        children: [
          {
            id: 20,
            icon: "text_fields",
            nodeType: NodeType.Variable,
            title: "Text Field",
            children: []
          }
        ]
      }
    ];

    return result;
  }
}
