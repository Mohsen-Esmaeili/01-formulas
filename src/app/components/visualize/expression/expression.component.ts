import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from '../../../models/node.model';
import { FormulaHelperService } from './../../../services/formula-helper.service';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit
{
  operatorType: string = '';
  @Input() syntaxTree: NodeModel;
  @Output() resultEmitter = new EventEmitter<number>();

  rightSideResult: number;
  leftSideResult: number;

  constructor(private formulaHelperService: FormulaHelperService) { }

  ngOnInit(): void
  {
    this.operatorType = this.syntaxTree.type;
    debugger;
  }

  RemoveNode(): void
  {
    console.log("Should remove");
  }

  Help(): void
  {

  }

  onRightValue(rightResult: number): void
  {
    this.rightSideResult = rightResult;
  }

  onLeftValue(leftResult: number): void
  {
    this.leftSideResult = leftResult;
  }

  calculateAndEmitResult(): void
  {
    console.log(this.leftSideResult + this.rightSideResult);
  }

  isNewExpression(syntaxTree: NodeModel): boolean
  {
    return this.formulaHelperService.isParen(syntaxTree.type);
  }
}
