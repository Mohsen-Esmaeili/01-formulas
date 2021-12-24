import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Addition } from 'src/app/models/addition';
import { NodeType } from '../../../constants/node-type';
import { Division } from '../../../models/division';
import { EmptyNode } from '../../../models/empty-node';
import { Multiplication } from '../../../models/multiplication';
import { Node } from '../../../models/node';
import { Power } from '../../../models/power';
import { Subtraction } from '../../../models/subtraction';
import { ExpressionHostDirective } from './../../../directives/expression-host.directive';
import { SharedService } from './../../../services/shared.service';
import GetComponent from './component.factory';
import { NodeComponent } from './expression-type/node/node.component';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit, OnChanges, OnDestroy
{
  sharedServiceSubscription: Subscription;

  selectedNodeId: string = '';
  @Input() selectable: boolean = true;
  @Input() parentNode: Node | undefined;
  @Input() node: Node;

  @ViewChild(ExpressionHostDirective, { static: true }) expressionHostDirective!: ExpressionHostDirective;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void
  {
    this.sharedServiceSubscription = this.sharedService.selectedEmitter.subscribe((response: string) =>
    {
      this.selectedNodeId = response;
    });

    this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    if (changes["node"] && !changes["node"].firstChange)
    {
      this.loadComponent();
    }
  }

  get isSelected(): boolean
  {
    return this.node.id === this.selectedNodeId;
  }

  onRemoveNode(): void
  {
    debugger;
    if (this.parentNode)
    {
      this.parentNode.removeChildById(this.node.id);
      this.sharedService.updatedEmitter.emit();
    }
  }

  onSelect(event: Event): void
  {
    event.stopPropagation();

    this.sharedService.selectedEmitter.emit(this.node.id);
  }

  loadComponent()
  {
    const viewContainerRef = this.expressionHostDirective.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<NodeComponent>(GetComponent(this.node.type));
    componentRef.instance.node = this.node;
  }

  isNewExpression(node: Node): boolean
  {
    return node.type === NodeType.Paren;
  }

  get leftExpression(): Node
  {
    switch (this.node.type)
    {
      case NodeType.Addition:
        return (<Addition>this.node).left;
      case NodeType.Subtraction:
        return (<Subtraction>this.node).left;
      case NodeType.Multiplication:
        return (<Multiplication>this.node).left;
      case NodeType.Division:
        return (<Division>this.node).left;
      case NodeType.Power:
        return (<Power>this.node).expression;
      default:
        return new EmptyNode();
    }
  }

  get rightExpression(): Node
  {
    switch (this.node.type)
    {
      case NodeType.Addition:
        return (<Addition>this.node).right;
      case NodeType.Subtraction:
        return (<Subtraction>this.node).right;
      case NodeType.Multiplication:
        return (<Multiplication>this.node).right;
      case NodeType.Division:
        return (<Division>this.node).right;
      case NodeType.Power:
        return (<Power>this.node).power;
      default:
        return new EmptyNode();
    }
  }

  ngOnDestroy(): void
  {
    this.sharedServiceSubscription?.unsubscribe();
  }
}
