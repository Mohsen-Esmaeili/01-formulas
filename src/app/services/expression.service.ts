import { Injectable } from "@angular/core";
import { Expression } from "../model/expression";

@Injectable()
export class ExpressionService
{
  load(): Array<Expression>
  {
    const result: Array<Expression> = [
      {
        id: 1,
        title: "Aggregation",
        children: [
          {
            id: 2,
            title: "Max",
            children: []
          },
          {
            id: 3,
            title: "Min",
            children: []
          },
          {
            id: 4,
            title: "Count",
            children: []
          },
          {
            id: 5,
            title: "Average",
            children: []
          }
        ]
      },
      {
        id: 6,
        title: "Math Operations",
        children: [
          {
            id: 6,
            title: "Addition (+)",
            children: []
          },
          {
            id: 7,
            title: "Subtraction (-)",
            children: []
          },
          {
            id: 8,
            title: "Multiplication (*)",
            children: []
          },
          {
            id: 9,
            title: "Division (/)",
            children: []
          },
          {
            id: 10,
            title: "Power (^)",
            children: []
          }
        ]
      },
      {
        id: 11,
        title: "Text operations",
        children: [
          {
            id: 12,
            title: "Concat",
            children: []
          }
        ]
      },
      {
        id: 13,
        title: "Specific values",
        children: [
          {
            id: 14,
            title: "PI",
            children: []
          },
          {
            id: 15,
            title: "E",
            children: []
          }
        ]
      },
      {
        id: 16,
        title: "Specific functions",
        children: [
          {
            id: 17,
            title: "SQRT",
            children: []
          },
          {
            id: 18,
            title: "SQR",
            children: []
          }
        ]
      }
    ];

    return result;
  }
}
