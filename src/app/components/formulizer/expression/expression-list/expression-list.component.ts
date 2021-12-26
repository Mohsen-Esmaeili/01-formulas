import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Expression } from '../../../../models/expression';
import { ExpressionService } from '../../../../services/expression.service';
import { NodeType } from './../../../../constants/node-type';
import { Node } from './../../../../models/node';
import { Paren } from './../../../../models/paren';
import { SharedService } from './../../../../services/shared.service';
import { AddNodePositionComponent } from './../add-node-position/add-node-position.component';
import { ExpressionInputComponent } from './../expression-input/expression-input.component';
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

    dialogRef.afterClosed().subscribe((positionRes: any) =>
    {
      if (expression.nodeType && positionRes.isSelected)
      {
        if (expression.nodeType === NodeType.Number || expression.nodeType === NodeType.Variable)
        {
          const valueDialog = this.dialog.open(ExpressionInputComponent, {
            panelClass: "select-node-data-modal",
            hasBackdrop: true,
            minWidth: "350px",
            data: {
              nodeType: expression.nodeType
            }
          });

          valueDialog.afterClosed().subscribe((dataRes: any) =>
          {
            if (dataRes.isSelected && expression.nodeType)
            {
              const newNode = this.expressionService.getNode(expression.nodeType, dataRes.value);
              this.node.addChild(this.expressionService.getPositionId((<Paren>this.node).expression, positionRes.isInLeftSide), newNode);
              this.sharedService.updatedEmitter.emit();
            }
          });
        } else
        {
          const newNode = this.expressionService.getNode(expression.nodeType);
          this.node.addChild(this.expressionService.getPositionId((<Paren>this.node).expression, positionRes.isInLeftSide), newNode);
          this.sharedService.updatedEmitter.emit();
        }
      }
    });
  }
}
