import { Component, Input, OnInit } from '@angular/core';
import { NodeModel } from '../../models/node.model';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent implements OnInit
{
  @Input() syntaxTree: NodeModel;

  constructor() { }

  ngOnInit(): void
  {
    debugger;
  }

}
