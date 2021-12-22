import { Component, Input } from '@angular/core';
import { NodeModel } from '../../models/node.model';
import { FormulaService } from './../../services/formula.service';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent
{
  @Input() syntaxTree: NodeModel;

  constructor(private formulaService: FormulaService) { }

  onRemove(idToDelete: string): void
  {
    const newSyntaxTree = this.formulaService.removeNode(this.syntaxTree, idToDelete);
    this.formulaService.syntaxTreeEmitter.emit(newSyntaxTree[0]);
  }
}
