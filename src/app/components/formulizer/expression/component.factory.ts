import { NodeType } from './../../../constants/node-type';
import { AdditionComponent } from './expression-type/addition/addition.component';
import { DivisionComponent } from './expression-type/division/division.component';
import { EmptyComponent } from './expression-type/empty/empty.component';
import { MultiplicationComponent } from './expression-type/multiplication/multiplication.component';
import { ParenComponent } from './expression-type/paren/paren.component';
import { PowerComponent } from './expression-type/power/power.component';
import { SubtractionComponent } from './expression-type/subtraction/subtraction.component';
import { ValueComponent } from './expression-type/value/value.component';
import { VariableComponent } from './expression-type/variable/variable.component';

export default function GetComponent(nodeType: NodeType)
{
  switch (nodeType)
  {
    case NodeType.Number:
      return ValueComponent;
    case NodeType.Variable:
      return VariableComponent;
    case NodeType.Addition:
      return AdditionComponent;
    case NodeType.Subtraction:
      return SubtractionComponent;
    case NodeType.Multiplication:
      return MultiplicationComponent;
    case NodeType.Division:
      return DivisionComponent;
    case NodeType.Power:
      return PowerComponent;
    case NodeType.Paren:
      return ParenComponent;
    case NodeType.Empty:
      return EmptyComponent;

    default:
      throw new Error(`Invalid node type. NodeType = ${ nodeType }`);
  }
}
