import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Node } from '../../../../../models/node';
import { ExpressionService } from './../../../../../services/expression.service';

@Component({
  selector: 'app-node',
  template: ''
})
export class NodeComponent implements OnInit, OnDestroy
{
  expressionServiceSubscription: Subscription;

  selectedNodeId: string = '';
  @Input() selectable: boolean = true;
  @Input() parentNode: Node | undefined;
  @Input() node: Node;

  constructor(public dialog: MatDialog, public expressionService: ExpressionService) { }

  ngOnInit(): void
  {
    this.expressionServiceSubscription = this.expressionService.selectedEmitter.subscribe((response: string) =>
    {
      this.selectedNodeId = response;
    });
  }

  get isSelected(): boolean
  {
    return this.node.id === this.selectedNodeId;
  }

  ngOnDestroy(): void
  {
    this.expressionServiceSubscription?.unsubscribe();
  }
}
