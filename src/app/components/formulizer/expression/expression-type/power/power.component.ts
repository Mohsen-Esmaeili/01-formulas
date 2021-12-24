import { Component, Input } from '@angular/core';
import { Node } from '../../../../../models/node';
import { NodeComponent } from '../node/node.component';
import { NodeType } from './../../../../../constants/node-type';
import { Power } from './../../../../../models/power';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements NodeComponent
{
  @Input() node: Node;
  operator: string = NodeType.Power;

  onRemove(id: string): void
  {

  }

  get power(): Node
  {
    return (<Power>this.node).expression;
  }

  get expression(): Node
  {
    return (<Power>this.node).power;
  }

  isParen(node: Node): boolean
  {
    return node.type === NodeType.Paren;
  }
}
