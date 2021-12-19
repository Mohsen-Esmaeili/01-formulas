import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from './../../../../models/node.model';
import { FormulaHelperService } from './../../../../services/formula-helper.service';

@Component({
  selector: 'app-expression-item',
  templateUrl: './expression-item.component.html',
  styleUrls: ['./expression-item.component.scss']
})
export class ExpressionItemComponent implements OnInit
{
  @Input() syntaxTree: NodeModel;
  @Output() valueEmitter = new EventEmitter<number>();

  value: number;

  constructor(public formulaHelper: FormulaHelperService) { }

  ngOnInit(): void
  {
    if (this.isStaticValue)
    {
      this.valueEmitter.emit(this.syntaxTree.value);
    }
  }

  onBlurInput(event: any): void
  {
    this.valueEmitter.emit(event.target.value);
  }

  get isStaticValue(): boolean
  {
    return this.formulaHelper.isNumber(this.syntaxTree.type) || this.formulaHelper.isPI(this.syntaxTree.type) || this.formulaHelper.isE(this.syntaxTree.type);
  }
}
