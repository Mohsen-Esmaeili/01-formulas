import { Injectable } from "@angular/core";
import { NodeType } from "../constants/node-type";
import { Expression } from "../models/expression";

@Injectable()
export class ExpressionService
{
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
