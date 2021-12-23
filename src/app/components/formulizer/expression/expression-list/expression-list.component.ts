import { Component, Input, OnInit } from '@angular/core';
import { Expression } from '../../../../models/expression';
import { ExpressionService } from '../../../../services/expression.service';

@Component({
  selector: 'app-expression-list',
  templateUrl: './expression-list.component.html',
  styleUrls: ['./expression-list.component.scss']
})
export class ExpressionListComponent implements OnInit
{
  @Input() visible: boolean;
  @Input() containerId: string;
  expressionList: Array<Expression> = [];
  constructor(private expressionService: ExpressionService) { }

  ngOnInit(): void
  {
    this.load();
  }

  load(): void
  {
    this.expressionList = this.expressionService.load();
  }

  expressionDetails(id: number): Array<Expression>
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
