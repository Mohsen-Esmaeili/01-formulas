import { Component, Input } from '@angular/core';
import { Node } from '../../model/node';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent
{
  @Input() syntaxTree: Node;

  onRemove(idToDelete: string): void
  {
  }
}
