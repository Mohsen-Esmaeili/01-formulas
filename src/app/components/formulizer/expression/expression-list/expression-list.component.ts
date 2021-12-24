import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Expression } from '../../../../models/expression';
import { ExpressionService } from '../../../../services/expression.service';
import { Node } from './../../../../models/node';
import GetNode from './node.factory';

@Component({
  selector: 'app-expression-list',
  templateUrl: './expression-list.component.html',
  styleUrls: ['./expression-list.component.scss']
})
export class ExpressionListComponent implements OnInit
{
  @Input() visible: boolean;
  @Output() newNodeEmitter = new EventEmitter<Node>();

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

  addNew(expression: Expression): void
  {
    this.newNodeEmitter.emit(GetNode(expression));
  }
}
