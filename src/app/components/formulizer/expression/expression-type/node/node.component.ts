import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { NodeManagerService } from 'src/app/services/node-manager.service';
import { Node } from '../../../../../models/node';
import { Expression } from './../../../../../models/expression';

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

  @Output() updateNodeEmitter = new EventEmitter<Expression>();

  constructor(public dialog: MatDialog, public nodeManagerService: NodeManagerService) { }

  ngOnInit(): void
  {
    this.expressionServiceSubscription = this.nodeManagerService.selectedEmitter.subscribe((response: string) =>
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
