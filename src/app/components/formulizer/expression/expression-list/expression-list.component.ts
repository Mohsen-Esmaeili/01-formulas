import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Expression } from '../../../../models/expression';
import { NodeManagerService } from '../../../../services/node-manager.service';
import { NodeType } from './../../../../constants/node-type';
@Component({
  selector: 'app-expression-list',
  templateUrl: './expression-list.component.html',
  styleUrls: ['./expression-list.component.scss']
})
export class ExpressionListComponent implements OnInit
{
  @Input() menuTriggerTmp: TemplateRef<any>;
  @Input() visible: boolean;
  @Input() nodeType: NodeType | undefined;

  @Output() newExpressionEmitter = new EventEmitter<Expression>();

  expressionList: Array<Expression> = [];
  constructor(private nodeManagerService: NodeManagerService) { }

  ngOnInit(): void
  {
    this.load();
  }

  load(): void
  {
    this.expressionList = this.nodeManagerService.loadImplementedExpressions();
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
    this.newExpressionEmitter.emit(expression);
  }

  get mathExpression(): Array<Expression>
  {
    return this.expressionList.filter(x => x.id === 6)[0].children.filter(x => x.nodeType !== this.nodeType);
  }
}
