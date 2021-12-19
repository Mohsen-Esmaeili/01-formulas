import { Component, Input, OnInit } from '@angular/core';
import { FormulaService } from '../../../../services/formula.service';
import { ExpressionModel } from './../../../../models/expression.model';

@Component({
  selector: 'app-expression-list',
  templateUrl: './expression-list.component.html',
  styleUrls: ['./expression-list.component.scss']
})
export class ExpressionListComponent implements OnInit
{
  @Input() visible: boolean;
  @Input() containerId: string;
  expressionList: Array<ExpressionModel> = [];
  constructor(private formulaService: FormulaService) { }

  ngOnInit(): void
  {
    this.load();
  }

  load(): void
  {
    this.expressionList = this.formulaService.getExpressionData();
  }

  expressionDetails(id: number): Array<ExpressionModel>
  {
    const parent = this.expressionList.find(x => x.id === id);
    if (parent)
    {
      return parent.children;
    }
    return [];
  }

  addNew(expressionId: number): void
  {

  }
}
