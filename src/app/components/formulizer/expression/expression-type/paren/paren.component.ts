import { Component } from '@angular/core';
import { Node } from 'src/app/models/node';
import { NodeComponent } from '../node/node.component';
import { Paren } from './../../../../../models/paren';

@Component({
  selector: 'app-paren',
  templateUrl: './paren.component.html',
  styleUrls: ['./paren.component.scss']
})
export class ParenComponent extends NodeComponent
{
  get parenExpression(): Node
  {
    return (<Paren>this.node).expression;
  }
}
