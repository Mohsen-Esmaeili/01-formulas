export class FormulaHelperService
{
  public isNumber(type: string): boolean
  {
    return type === "NUMBER";
  }

  public isVariable(type: string): boolean
  {
    return type === "VARIABLE";
  }

  public isPI(type: string): boolean
  {
    return type === "PI";
  }

  public isE(type: string): boolean
  {
    return type === "E";
  }

  public isAddition(type: string): boolean
  {
    return type === "ADDITION";
  }

  public isSubtraction(type: string): boolean
  {
    return type === "SUBTRACTION";
  }

  public isMultiplication(type: string): boolean
  {
    return type === "MULTIPLICATION";
  }

  public isDivision(type: string): boolean
  {
    return type === "DIVISION";
  }

  public isParen(type: string): boolean
  {
    return type === "PAREN";
  }

  public isPower(type: string): boolean
  {
    return type === "POWER";
  }

  public isFunction(type: string): boolean
  {
    return type === "FUNCTION";
  }

  public isNegation(type: string): boolean
  {
    return type === "NEGATION";
  }
}
