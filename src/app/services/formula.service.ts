import { EventEmitter, Injectable } from "@angular/core";
import { NodeType } from "../constants/node-type";
import { NodeModel } from "../models/node.model";

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

  removeNode(syntaxTree: NodeModel, idToDelete: string): void
  {
    if (syntaxTree.left.id === idToDelete)
    {
      // syntaxTree.left = new NodeList();
    } else
    {
      this.removeNode(syntaxTree.left, idToDelete);
    }
    if (syntaxTree.right)
    {
      this.removeNode(syntaxTree.right, idToDelete);
    }
    if (syntaxTree.expression)
    {
      this.removeNode(syntaxTree.expression, idToDelete);
    }
    if (syntaxTree.power)
    {
      this.removeNode(syntaxTree.power, idToDelete);
    }
  }
}
