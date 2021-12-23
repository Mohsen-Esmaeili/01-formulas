import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeType } from '../../../../constants/node-type';
import { Node } from '../../../../models/node';

@Component({
  selector: 'app-expression-item',
  templateUrl: './expression-item.component.html',
  styleUrls: ['./expression-item.component.scss']
})
export class ExpressionItemComponent implements OnInit
{
  @Input() node: Node;
  @Output() valueEmitter = new EventEmitter<number>();

  value: number;

  ngOnInit(): void
  {
    if (this.isStaticValue)
    {
      this.valueEmitter.emit(5);
    }
  }

  RemoveNode(id: string): void
  {
    console.log(id);
  }

  onBlurInput(event: any): void
  {
    this.valueEmitter.emit(event.target.value);
  }

  get isStaticValue(): boolean
  {
    return this.node.type === NodeType.Number || this.node.type === NodeType.PI || this.node.type === NodeType.E;
  }
}
