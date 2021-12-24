import { Component } from '@angular/core';
import { NodeComponent } from '../node/node.component';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent extends NodeComponent
{
}
