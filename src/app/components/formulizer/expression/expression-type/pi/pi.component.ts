import { Component } from '@angular/core';
import { NodeComponent } from './../node/node.component';

@Component({
  selector: 'app-pi',
  templateUrl: './pi.component.html',
  styleUrls: ['./pi.component.scss']
})
export class PiComponent extends NodeComponent
{
}
