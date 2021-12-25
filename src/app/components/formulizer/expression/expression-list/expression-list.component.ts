import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'underscore';
import { Expression } from '../../../../models/expression';
import { ExpressionService } from '../../../../services/expression.service';
import { Node } from './../../../../models/node';
import { Paren } from './../../../../models/paren';
import { SharedService } from './../../../../services/shared.service';
import { AddNodePositionComponent } from './../add-node-position/add-node-position.component';
@Component({
  selector: 'app-expression-list',
  templateUrl: './expression-list.component.html',
  styleUrls: ['./expression-list.component.scss']
})
export class ExpressionListComponent implements OnInit
{
  @Input() menuTriggerTmp: TemplateRef<any>;
  @Input() node: Node;
  @Input() visible: boolean;
  @Output() newNodeEmitter = new EventEmitter<Node>();

  expressionList: Array<Expression> = [];
  constructor(private expressionService: ExpressionService,
    private dialog: MatDialog,
    private sharedService: SharedService) { }

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
    const dialogRef = this.dialog.open(AddNodePositionComponent, {
      panelClass: "add-node-position-modal",
      hasBackdrop: true,
      minWidth: "350px",
      minHeight: "350px",
      data: {
        nodeType: (<Paren>this.node).expression.type
      }
    });

    dialogRef.afterClosed().subscribe((response: any) =>
    {
      if (expression.nodeType && response.isSelected)
      {
        const newNode = this.expressionService.getNode(_.assign(this.node), expression.nodeType, response.isInLeftSide);
        this.node.addChild(this.node.id, newNode);
        this.sharedService.updatedEmitter.emit();
      }
    });
  }
}
