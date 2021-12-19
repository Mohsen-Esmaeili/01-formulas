import { EventEmitter, Injectable } from "@angular/core";
import { NodeType } from "../constants/node-type";
import { NodeModel } from "../models/node.model";
import { ExpressionModel } from './../models/expression.model';

@Injectable()
export class FormulaService
{
  syntaxTreeEmitter = new EventEmitter<NodeModel>();

  convertASTToFormula(astNode: NodeModel): string | number
  {
    if (astNode.type === NodeType.Number)
    {
      return astNode.value;
    }

    if (astNode.type === NodeType.Variable)
    {
      return astNode.name;
    }

    if (astNode.type === NodeType.PI)
    {
      return astNode.value;
    }

    if (astNode.type === NodeType.E)
    {
      return astNode.value;
    }

    if (astNode.type === NodeType.Addition)
    {
      return this.convertASTToFormula(astNode.left) + '+' + this.convertASTToFormula(astNode.right);
    }

    if (astNode.type === NodeType.Subtraction)
    {
      return this.convertASTToFormula(astNode.left) + '-' + this.convertASTToFormula(astNode.right);
    }

    if (astNode.type === NodeType.Multiplication)
    {
      return this.convertASTToFormula(astNode.left) + '*' + this.convertASTToFormula(astNode.right);
    }

    if (astNode.type === NodeType.Division)
    {
      return this.convertASTToFormula(astNode.left) + '/' + this.convertASTToFormula(astNode.right);
    }

    if (astNode.type === NodeType.Power)
    {
      return this.convertASTToFormula(astNode.expression) + '^' + this.convertASTToFormula(astNode.power);
    }

    if (astNode.type === NodeType.Negation)
    {
      return "-" + this.convertASTToFormula(astNode.expression);
    }

    if (astNode.type === NodeType.Function)
    {
      return astNode.name + "(" + astNode.arguments.map(arg => this.convertASTToFormula(arg)).join(", ") + ")";
    }

    if (astNode.type === NodeType.Paren)
    {
      if (astNode.expression.type === NodeType.Subtraction)
      {
        return "(" + this.convertASTToFormula(astNode.expression.left) + "-" + this.convertASTToFormula(astNode.expression.right) + ")";
      }
      if (astNode.expression.type === NodeType.Addition)
      {
        return "(" + this.convertASTToFormula(astNode.expression.left) + "+" + this.convertASTToFormula(astNode.expression.right) + ")";
      }

      if (astNode.expression.type === NodeType.Multiplication)
      {
        return "(" + this.convertASTToFormula(astNode.expression.left) + "*" + this.convertASTToFormula(astNode.expression.right) + ")";
      }

      if (astNode.expression.type === NodeType.Division)
      {
        return "(" + this.convertASTToFormula(astNode.expression.left) + "/" + this.convertASTToFormula(astNode.expression.right) + ")";
      }

      if (astNode.expression.type === NodeType.Power)
      {
        return "(" + this.convertASTToFormula(astNode.expression.expression) + "^" + this.convertASTToFormula(astNode.expression.power) + ")";
      }

      if (astNode.expression.type === NodeType.Negation)
      {
        return "(-" + this.convertASTToFormula(astNode.expression.expression) + ")";
      }

      if (astNode.expression.type === NodeType.Function)
      {
        return "(" + astNode.name + "(" + astNode.arguments.map(arg => this.convertASTToFormula(arg)).join(", ") + ")" + ")";
      }

      if (astNode.expression.type === NodeType.Paren)
      {
        return '(' + this.convertASTToFormula(astNode.expression) + ')';
      }

      if (astNode.expression.type === NodeType.Number)
      {
        return "(" + this.convertASTToFormula(astNode.expression) + ")";
      }

      if (astNode.expression.type === NodeType.Variable)
      {
        return astNode.name;
      }

      if (astNode.expression.type === NodeType.PI)
      {
        return astNode.value;
      }

      if (astNode.expression.type === NodeType.E)
      {
        return astNode.value;
      }
    }

    return "Wrong expression";
  }

  addNewExpression(syntaxTree: NodeModel, id: number): void
  {
    console.log("Add Item");
  }

  removeNode(syntaxTree: NodeModel, idToDelete: string): void
  {
    if (!syntaxTree)
    {
      return;
    }

    if (syntaxTree.id === idToDelete)
    {
      syntaxTree = new NodeModel();
      return;
    }

    if (syntaxTree.left)
    {
      if (syntaxTree.left.id === idToDelete)
      {
        syntaxTree.left = new NodeModel();
        return;
      } else
      {
        this.removeNode(syntaxTree.left, idToDelete);
      }
    }

    if (syntaxTree.right)
    {
      if (syntaxTree.right.id === idToDelete)
      {
        syntaxTree.right = new NodeModel();
        return;
      } else
      {
        this.removeNode(syntaxTree.right, idToDelete);
      }
    }
    if (syntaxTree.expression)
    {
      if (syntaxTree.expression.id === idToDelete)
      {
        syntaxTree.expression = new NodeModel();
        return;
      } else
      {
        this.removeNode(syntaxTree.expression, idToDelete);
      }
    }
    if (syntaxTree.power)
    {
      if (syntaxTree.power.id === idToDelete)
      {
        syntaxTree.power = new NodeModel();
        return;
      } else
      {
        this.removeNode(syntaxTree.power, idToDelete);
      }
    }
  }

  getExpressionData(): Array<ExpressionModel>
  {
    const result: Array<ExpressionModel> = [
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
