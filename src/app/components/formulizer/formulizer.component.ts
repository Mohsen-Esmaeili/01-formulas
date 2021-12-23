import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Node } from '../../models/node';
import { NodeManagerService } from '../../services/node-manager.service';

@Component({
  selector: 'app-formulizer',
  templateUrl: './formulizer.component.html',
  styleUrls: ['./formulizer.component.scss']
})
export class FormulizerComponent implements OnInit
{

  // formula: string = "($b + SQRT (SQR($b) - (4 * $a))) / (2 * $a)";
  // formula: string = "($b - 4 - $a) - (2 -  $a)";
  visualizerOutput: string = "";
  syntaxTreeJson: string = "";
  node: Node;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private nodeManagerService: NodeManagerService,
    private router: Router) { }

  ngOnInit(): void
  {
    this.form = this.formBuilder.group({
      formula: ['(2 + $a)']
    });
  }

  updateAstView()
  {
    if (this.form?.invalid)
    {
      return;
    }

    this.node = this.nodeManagerService.Load(this.formControls["formula"].value);
    this.syntaxTreeJson = JSON.stringify(this.node, null, 2);
  }

  convertAstToFormula()
  {
    if (this.form?.invalid)
    {
      return;
    }

    this.node = this.nodeManagerService.Load(this.formControls["formula"].value);
    this.visualizerOutput = this.node.getString();
  }

  get formControls()
  {
    return this.form?.controls;
  }

  onGoHome(): void
  {
    this.router.navigate(['/']);
  }

  onRemove(idToDelete: string): void
  {
  }
}
