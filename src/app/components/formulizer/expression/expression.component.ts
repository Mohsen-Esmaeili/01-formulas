import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { NodeManagerService } from 'src/app/services/node-manager.service';
import { Node } from '../../../models/node';
import { ExpressionHostDirective } from './../../../directives/expression-host.directive';
import { Expression } from './../../../models/expression';
import GetComponent from './component.factory';
import { NodeComponent } from './expression-type/node/node.component';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpressionComponent implements OnInit, OnChanges
{
  @Input() parentNode: Node | undefined;
  @Input() node: Node;

  @ViewChild(ExpressionHostDirective, { static: true }) expressionHostDirective!: ExpressionHostDirective;

  constructor(private nodeManagerService: NodeManagerService) { }

  ngOnInit(): void
  {
    this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    if (changes["node"] && !changes["node"].firstChange)
    {
      this.loadComponent();
    }
  }

  loadComponent()
  {
    const viewContainerRef = this.expressionHostDirective.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<NodeComponent>(GetComponent(this.node.type));
    componentRef.instance.parentNode = this.parentNode;
    componentRef.instance.node = this.node;

    componentRef.instance.updateNodeEmitter.subscribe((expression: Expression) =>
    {
      if (this.parentNode)
      {
        this.nodeManagerService.updateNode(this.parentNode, expression, this.node.id);
      }
    });
  }
}
