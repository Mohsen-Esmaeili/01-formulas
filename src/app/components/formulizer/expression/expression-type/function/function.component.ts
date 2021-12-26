import { Component } from '@angular/core';
import { Function } from '../../../../../models/function';
import { Node } from '../../../../../models/node';
import { NodeComponent } from './../node/node.component';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent extends NodeComponent
{
  get name(): string
  {
    return (<Function>this.node).name;
  }

  get args(): Array<Node>
  {
    return (<Function>this.node).args;
  }
}
