import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeType } from './../../../../constants/node-type';
import { NodeModel } from './../../../../models/node.model';

@Component({
  selector: 'app-expression-item',
  templateUrl: './expression-item.component.html',
  styleUrls: ['./expression-item.component.scss']
})
export class ExpressionItemComponent implements OnInit
{
  @Input() syntaxTree: NodeModel;
  @Output() valueEmitter = new EventEmitter<number>();

  value: number;

  ngOnInit(): void
  {
    if (this.isStaticValue)
    {
      this.valueEmitter.emit(this.syntaxTree.value);
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
    return this.syntaxTree.type === NodeType.Number || this.syntaxTree.type === NodeType.PI || this.syntaxTree.type === NodeType.E;
  }
}
