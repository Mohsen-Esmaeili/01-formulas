import { Component } from '@angular/core';
import { NodeComponent } from '../node/node.component';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent extends NodeComponent
{
}
