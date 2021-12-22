import { EventEmitter, Injectable } from "@angular/core";
import { NodeType } from "../constants/node-type";
import { NodeModel } from "../models/node.model";
import { ExpressionModel } from './../models/expression.model';

@Injectable()
export class FormulaService
{
  syntaxTreeEmitter = new EventEmitter<NodeModel | undefined>();

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

    if (astNode.type === NodeType.Addition && astNode.left && astNode.right)
    {
      return this.convertASTToFormula(astNode?.left) + '+' + this.convertASTToFormula(astNode.right);
    }

    if (astNode.type === NodeType.Subtraction && astNode.left && astNode.right)
    {
      return this.convertASTToFormula(astNode.left) + '-' + this.convertASTToFormula(astNode.right);
    }

    if (astNode.type === NodeType.Multiplication && astNode.left && astNode.right)
    {
      return this.convertASTToFormula(astNode.left) + '*' + this.convertASTToFormula(astNode.right);
    }

    if (astNode.type === NodeType.Division && astNode.left && astNode.right)
    {
      return this.convertASTToFormula(astNode.left) + '/' + this.convertASTToFormula(astNode.right);
    }

    if (astNode.type === NodeType.Power && astNode.power && astNode.expression)
    {
      return this.convertASTToFormula(astNode.expression) + '^' + this.convertASTToFormula(astNode.power);
    }

    if (astNode.type === NodeType.Negation && astNode.expression)
    {
      return "-" + this.convertASTToFormula(astNode.expression);
    }

    if (astNode.type === NodeType.Function)
    {
      return astNode.name + "(" + astNode.arguments.map(arg => this.convertASTToFormula(arg)).join(", ") + ")";
    }

    if (astNode.type === NodeType.Paren && astNode.expression)
    {
      const expression = astNode.expression;
      if (expression.type === NodeType.Subtraction && expression.left && expression.right)
      {
        return "(" + this.convertASTToFormula(expression.left) + "-" + this.convertASTToFormula(expression.right) + ")";
      }
      if (expression.type === NodeType.Addition && expression.left && expression.right)
      {
        return "(" + this.convertASTToFormula(expression.left) + "+" + this.convertASTToFormula(expression.right) + ")";
      }

      if (expression.type === NodeType.Multiplication && expression.left && expression.right)
      {
        return "(" + this.convertASTToFormula(expression.left) + "*" + this.convertASTToFormula(expression.right) + ")";
      }

      if (expression.type === NodeType.Division && expression.left && expression.right)
      {
        return "(" + this.convertASTToFormula(expression.left) + "/" + this.convertASTToFormula(expression.right) + ")";
      }

      if (expression.type === NodeType.Power && expression.expression && expression.power)
      {
        return "(" + this.convertASTToFormula(expression.expression) + "^" + this.convertASTToFormula(expression.power) + ")";
      }

      if (expression.type === NodeType.Negation && expression.expression)
      {
        return "(-" + this.convertASTToFormula(expression.expression) + ")";
      }

      if (expression.type === NodeType.Function)
      {
        return "(" + astNode.name + "(" + astNode.arguments.map(arg => this.convertASTToFormula(arg)).join(", ") + ")" + ")";
      }

      if (expression.type === NodeType.Paren)
      {
        return '(' + this.convertASTToFormula(expression) + ')';
      }

      if (expression.type === NodeType.Number)
      {
        return "(" + this.convertASTToFormula(expression) + ")";
      }

      if (expression.type === NodeType.Variable)
      {
        return astNode.name;
      }

      if (expression.type === NodeType.PI)
      {
        return astNode.value;
      }

      if (expression.type === NodeType.E)
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

  removeNode(syntaxTree: NodeModel, id: string): [syntaxTree: NodeModel | undefined, isDeleted: boolean]
  {
    debugger;
    let result: [syntaxTree: NodeModel | undefined, isDeleted: boolean] = [syntaxTree, false];

    //Remove root
    if (syntaxTree.id === id)
    {
      result = [undefined, true];
      console.log(result);
      return result;
    }

    //Check left
    if (syntaxTree.left)
    {
      if (syntaxTree.left?.id === id)
      {
        delete syntaxTree.left;
        result = [syntaxTree, true];
        console.log(result);
        return result;
      }
      else
      {
        result = this.removeNode(syntaxTree.left, id);
        if (result[1])
        {
          syntaxTree.left = result[0];
          return [syntaxTree, true];
        }
        // if (result[1])
        // {
        // return result;
        // }
      }
    }

    //Check right
    if (syntaxTree.right)
    {
      if (syntaxTree.right?.id === id)
      {
        delete syntaxTree.right;
        result = [syntaxTree, true];
        console.log(result);
        return result;
      }
      else
      {
        result = this.removeNode(syntaxTree.right, id);
        if (result[1])
        {
          syntaxTree.left = result[0];
          return [syntaxTree, true];
        }
        // if (result[1])
        // {
        // return result;
        // }
      }
    }

    //Check expression
    if (syntaxTree.expression)
    {
      if (syntaxTree.expression?.id === id)
      {
        delete syntaxTree.expression;
        result = [syntaxTree, true];
        console.log(result);
        return result;
      }
      else
      {
        result = this.removeNode(syntaxTree.expression, id);
        if (result[1])
        {
          syntaxTree.expression = result[0];
          return [syntaxTree, true];
        }
        // if (result[1])
        // {
        // return result;
        // }
      }
    }

    //Check right
    if (syntaxTree.power)
    {
      if (syntaxTree.power?.id === id)
      {
        delete syntaxTree.power;
        result = [syntaxTree, true];
        console.log(result);
        return result;
      }
      else
      {
        result = this.removeNode(syntaxTree.power, id);
        console.log(result);
        // if (result[1])
        // {
        // return result;
        // }
      }
    }

    console.log(result);
    return result;


    // if (syntaxTree.id === idToDelete)
    // {
    //   return ;
    // }

    // if (syntaxTree.left)
    // {
    //   return this.removeNode(syntaxTree.left, idToDelete);
    // }

    // if (syntaxTree.right)
    // {
    //   return this.removeNode(syntaxTree.right, idToDelete);
    // }
    // if (syntaxTree.expression)
    // {
    //   return this.removeNode(syntaxTree.expression, idToDelete);
    // }
    // if (syntaxTree.power)
    // {
    //   return this.removeNode(syntaxTree.power, idToDelete);
    // }
    // return new NodeModel();
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
