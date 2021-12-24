import { Component, Input } from '@angular/core';
import { Node } from '../../../../models/node';

@Component({
  selector: 'app-expression-item',
  templateUrl: './expression-item.component.html',
  styleUrls: ['./expression-item.component.scss']
})
export class ExpressionItemComponent
{
  @Input() node: Node;
}
