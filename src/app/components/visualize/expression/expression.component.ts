import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from '../../../models/node.model';
import { NodeType } from './../../../constants/node-type';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit
{
  operatorType: string = '';
  @Input() syntaxTree: NodeModel;
  @Input() canRemove: boolean;
  @Input() canAdd: boolean;
  @Output() resultEmitter = new EventEmitter<number>();
  @Output() removeEmitter = new EventEmitter<string>();

  rightSideResult: number;
  leftSideResult: number;

  ngOnInit(): void
  {
    this.operatorType = this.syntaxTree.type;
  }

  RemoveNode(id: string): void
  {
    this.removeEmitter.emit(id);
  }

  onAddNode(id: string): void
  {
    console.log(id);
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
    return syntaxTree.type === NodeType.Paren;
  }

  get leftExpression(): NodeModel | undefined
  {
    return this.syntaxTree.type === NodeType.Power ? this.syntaxTree.expression : this.syntaxTree.left;
  }

  get rightExpression(): NodeModel | undefined
  {
    return this.syntaxTree.type === NodeType.Power ? this.syntaxTree.power : this.syntaxTree.right;
  }
}
