import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Addition } from 'src/app/models/addition';
import { NodeType } from '../../../constants/node-type';
import { Division } from '../../../models/division';
import { EmptyNode } from '../../../models/empty-node';
import { Multiplication } from '../../../models/multiplication';
import { Node } from '../../../models/node';
import { Power } from '../../../models/power';
import { Subtraction } from '../../../models/subtraction';
import { ExpressionHostDirective } from './../../../directives/expression-host.directive';
import { AdditionComponent } from './expression-type/addition/addition.component';
import { MultiplicationComponent } from './expression-type/multiplication/multiplication.component';
import { NodeComponent } from './expression-type/node/node.component';
import { ParenComponent } from './expression-type/paren/paren.component';
import { PowerComponent } from './expression-type/power/power.component';
import { SubtractionComponent } from './expression-type/subtraction/subtraction.component';
import { ValueComponent } from './expression-type/value/value.component';
import { VariableComponent } from './expression-type/variable/variable.component';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit
{
  operatorType: string = '';
  @Input() node: Node;
  @Input() canRemove: boolean;
  @Input() canAdd: boolean;
  @Output() resultEmitter = new EventEmitter<number>();
  @Output() removeEmitter = new EventEmitter<string>();

  rightSideResult: number;
  leftSideResult: number;

  @ViewChild(ExpressionHostDirective, { static: true }) expressionHostDirective!: ExpressionHostDirective;
  ngOnInit(): void
  {
    this.operatorType = this.node.type;
    this.loadComponent();
  }

  onRemove(id: string): void
  {

  }

  loadComponent()
  {
    const viewContainerRef = this.expressionHostDirective.viewContainerRef;
    viewContainerRef.clear();

    switch (this.node.type)
    {
      case NodeType.Number:
        const valueComponentRef = viewContainerRef.createComponent<NodeComponent>(ValueComponent);
        //TODO: Should load correct node
        valueComponentRef.instance.node = this.node;
        break;
      case NodeType.Variable:
        const variableComponentRef = viewContainerRef.createComponent<NodeComponent>(VariableComponent);
        //TODO: Should load correct node
        variableComponentRef.instance.node = this.node;
        break;
      case NodeType.Addition:
        const additionComponentRef = viewContainerRef.createComponent<NodeComponent>(AdditionComponent);
        //TODO: Should load correct node
        additionComponentRef.instance.node = this.node;
        break;
      case NodeType.Subtraction:
        const subtractionComponentRef = viewContainerRef.createComponent<NodeComponent>(SubtractionComponent);
        //TODO: Should load correct node
        subtractionComponentRef.instance.node = this.node;
        break;
      case NodeType.Multiplication:
        const multiplicationComponentRef = viewContainerRef.createComponent<NodeComponent>(MultiplicationComponent);
        //TODO: Should load correct node
        multiplicationComponentRef.instance.node = this.node;
        break;
      case NodeType.Power:
        const powerComponentRef = viewContainerRef.createComponent<NodeComponent>(PowerComponent);
        //TODO: Should load correct node
        powerComponentRef.instance.node = this.node;
        break;
      case NodeType.Paren:
        const parenComponentRef = viewContainerRef.createComponent<NodeComponent>(ParenComponent);
        //TODO: Should load correct node
        parenComponentRef.instance.node = this.node;
        break;

      default:
        break;
    }
  }

  RemoveNode(id: string): void
  {
    this.removeEmitter.emit(id);
  }

  onAddNode(id: string): void
  {
    console.log(id);
  }

  onRightValue(rightResult: number): void
  {
    this.rightSideResult = rightResult;
  }

  onLeftValue(leftResult: number): void
  {
    this.leftSideResult = leftResult;
  }

  calculateAndEmitResult(): void
  {
    console.log(this.leftSideResult + this.rightSideResult);
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
}
