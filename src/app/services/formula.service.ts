import { Injectable } from "@angular/core";
import { NodeModel } from "../models/node.model";
import { FormulaHelperService } from "./formula-helper.service";

@Injectable()
export class FormulaService
{
  constructor(private helper: FormulaHelperService) { }

  convertASTToFormula(astNode: NodeModel): string | number
  {
    if (this.helper.isNumber(astNode.type))
    {
      return astNode.value;
    }

    if (this.helper.isVariable(astNode.type))
    {
      return astNode.name;
    }

    if (this.helper.isPI(astNode.type))
    {
      return astNode.value;
    }

    if (this.helper.isE(astNode.type))
    {
      return astNode.value;
    }

    if (this.helper.isAddition(astNode.type))
    {
      return this.convertASTToFormula(astNode.left) + '+' + this.convertASTToFormula(astNode.right);
    }

    if (this.helper.isSubtraction(astNode.type))
    {
      return this.convertASTToFormula(astNode.left) + '-' + this.convertASTToFormula(astNode.right);
    }

    if (this.helper.isMultiplication(astNode.type))
    {
      return this.convertASTToFormula(astNode.left) + '*' + this.convertASTToFormula(astNode.right);
    }

    if (this.helper.isDivision(astNode.type))
    {
      return this.convertASTToFormula(astNode.left) + '/' + this.convertASTToFormula(astNode.right);
    }

    if (this.helper.isPower(astNode.type))
    {
      return this.convertASTToFormula(astNode.expression) + '^' + this.convertASTToFormula(astNode.power);
    }

    if (this.helper.isNegation(astNode.type))
    {
      return "-" + this.convertASTToFormula(astNode.expression);
    }

    if (this.helper.isFunction(astNode.type))
    {
      return astNode.name + "(" + astNode.arguments.map(arg => this.convertASTToFormula(arg)).join(", ") + ")";
    }

    if (this.helper.isParen(astNode.type))
    {
      if (this.helper.isSubtraction(astNode.expression.type))
      {
        return "(" + this.convertASTToFormula(astNode.expression.left) + "-" + this.convertASTToFormula(astNode.expression.right) + ")";
      }
      if (this.helper.isAddition(astNode.expression.type))
      {
        return "(" + this.convertASTToFormula(astNode.expression.left) + "+" + this.convertASTToFormula(astNode.expression.right) + ")";
      }

      if (this.helper.isMultiplication(astNode.expression.type))
      {
        return "(" + this.convertASTToFormula(astNode.expression.left) + "*" + this.convertASTToFormula(astNode.expression.right) + ")";
      }

      if (this.helper.isDivision(astNode.expression.type))
      {
        return "(" + this.convertASTToFormula(astNode.expression.left) + "/" + this.convertASTToFormula(astNode.expression.right) + ")";
      }

      if (this.helper.isPower(astNode.expression.type))
      {
        return "(" + this.convertASTToFormula(astNode.expression.expression) + "^" + this.convertASTToFormula(astNode.expression.power) + ")";
      }

      if (this.helper.isNegation(astNode.expression.type))
      {
        return "(-" + this.convertASTToFormula(astNode.expression.expression) + ")";
      }

      if (this.helper.isFunction(astNode.expression.type))
      {
        return "(" + astNode.name + "(" + astNode.arguments.map(arg => this.convertASTToFormula(arg)).join(", ") + ")" + ")";
      }

      if (this.helper.isParen(astNode.expression.type))
      {
        return '(' + this.convertASTToFormula(astNode.expression) + ')';
      }

      if (this.helper.isNumber(astNode.expression.type))
      {
        return "(" + this.convertASTToFormula(astNode.expression) + ")";
      }

      if (this.helper.isVariable(astNode.type))
      {
        return astNode.name;
      }

      if (this.helper.isPI(astNode.type))
      {
        return astNode.value;
      }

      if (this.helper.isE(astNode.type))
      {
        return astNode.value;
      }
    }

    return "Something Wrong Happened....";
  }
}
