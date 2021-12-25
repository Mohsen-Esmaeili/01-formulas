import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { Node } from '../../../models/node';
import { ExpressionHostDirective } from './../../../directives/expression-host.directive';
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
    debugger;
    const viewContainerRef = this.expressionHostDirective.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<NodeComponent>(GetComponent(this.node.type));
    componentRef.instance.parentNode = this.parentNode;
    componentRef.instance.node = this.node;
  }
}
