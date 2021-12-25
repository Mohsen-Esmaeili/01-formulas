import { Injectable } from "@angular/core";
import { NodeType } from "../constants/node-type";
import { Addition } from "../models/addition";
import { Division } from "../models/division";
import { EmptyNode } from "../models/empty-node";
import { Expression } from "../models/expression";
import { Multiplication } from "../models/multiplication";
import { Node } from "../models/node";
import { Power } from "../models/power";
import { Subtraction } from "../models/subtraction";
import { Paren } from './../models/paren';

@Injectable()
export class ExpressionService
{
  getNode(node: Node, newNodeType: NodeType, isInLeftSide: boolean): Node
  {
    let newNode: Node;
    switch (newNodeType)
    {
      case NodeType.Addition:
        newNode = new Addition(new EmptyNode(), new EmptyNode());
        break;
      case NodeType.Subtraction:
        newNode = new Subtraction(new EmptyNode(), new EmptyNode());
        break;
      case NodeType.Multiplication:
        newNode = new Multiplication(new EmptyNode(), new EmptyNode());
        break;
      case NodeType.Division:
        newNode = new Division(new EmptyNode(), new EmptyNode());
        break;
      case NodeType.Power:
        newNode = new Power(new EmptyNode(), new EmptyNode());
        break;

      default:
        throw new Error(`Invalid node type. NodeType = ${ newNodeType }`);
    }

    return this.getFinalNode(node, isInLeftSide, newNode);
  }

  getFinalNode(node: Node, isInLeftSide: boolean, newNode: Node): Node
  {
    const expression = (<Paren>node).expression;
    switch (expression.type)
    {
      case NodeType.Addition:
        return isInLeftSide ? new Addition(new Paren(newNode), new Paren(expression)) : new Addition(new Paren(expression), new Paren(newNode));
      case NodeType.Subtraction:
        return isInLeftSide ? new Subtraction(new Paren(newNode), new Paren(expression)) : new Subtraction(new Paren(expression), new Paren(newNode));
      case NodeType.Multiplication:
        return isInLeftSide ? new Multiplication(new Paren(newNode), new Paren(expression)) : new Multiplication(new Paren(expression), new Paren(newNode));
      case NodeType.Division:
        return isInLeftSide ? new Division(new Paren(newNode), new Paren(expression)) : new Division(new Paren(expression), new Paren(newNode));
      case NodeType.Power:
        return isInLeftSide ? new Power(new Paren(newNode), new Paren(expression)) : new Power(new Paren(expression), new Paren(newNode));

      default:
        throw new Error(`Invalid node type. NodeType = ${ expression.type }`);
    }
  }

  // getCorrectPositionId(node: Node, isInLeftSide: boolean): string
  // {
  //   switch (node.type)
  //   {
  //     case NodeType.Addition:
  //       return isInLeftSide ? (<Addition>node).left.id : (<Addition>node).right.id;
  //     case NodeType.Subtraction:
  //       return isInLeftSide ? (<Subtraction>node).left.id : (<Subtraction>node).right.id;
  //     case NodeType.Multiplication:
  //       return isInLeftSide ? (<Multiplication>node).left.id : (<Multiplication>node).right.id;
  //     case NodeType.Division:
  //       return isInLeftSide ? (<Division>node).left.id : (<Division>node).right.id;
  //     case NodeType.Power:
  //       return isInLeftSide ? (<Power>node).expression.id : (<Power>node).power.id;

  //     default:
  //       throw new Error(`Invalid node type. NodeType = ${ node.type }`);
  //   }
  // }

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
      }
    ];

    return result;
  }
}
