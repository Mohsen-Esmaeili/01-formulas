import { Component } from '@angular/core';
import { NodeComponent } from '../node/node.component';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent extends NodeComponent
{
}
