import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// @ts-ignore
import * as Parser from '../../parser/formula-parser.js';
import { NodeModel } from './../../models/node.model';
import { FormulaService } from './../../services/formula.service';
import { NodeManager } from './../../services/node-manager';

const parse = Parser.parse;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit
{

  // formula: string = "($b + SQRT (SQR($b) - (4 * $a))) / (2 * $a)";
  // formula: string = "($b - 4 - $a) - (2 -  $a)";
  visualizerOutput: string = "";
  syntaxTree: NodeModel;
  syntaxTreeJson: string = "";

  form: FormGroup;

  constructor(private formulaService: FormulaService, private formBuilder: FormBuilder, private nodeManager: NodeManager) { }

  ngOnInit(): void
  {
    this.form = this.formBuilder.group({
      formula: ['($b + 2) * ($a - 5)']
    });

    this.formulaService.syntaxTreeEmitter.subscribe((response: NodeModel) =>
    {
      debugger;
      this.syntaxTree = response;
    });
  }

  ngAfterContentInit(): void
  {
    this.syntaxTree = parse(this.formControls["formula"].value);
  }

  updateAstView()
  {
    if (this.form?.invalid)
    {
      return;
    }
    console.log(this.nodeManager.Load(this.formControls["formula"].value));

    console.log('creating ast view...');
    this.syntaxTree = parse(this.formControls["formula"].value);
    console.log('The ast is: ', this.syntaxTree);
    this.syntaxTreeJson = JSON.stringify(this.syntaxTree, null, 2);
  }

  convertAstToFormula()
  {
    if (this.form?.invalid)
    {
      return;
    }

    console.log('converting ast to string...');
    this.syntaxTree = parse(this.formControls["formula"].value);
    this.visualizerOutput = this.formulaService.convertASTToFormula(this.syntaxTree).toString();
  }

  get formControls()
  {
    return this.form?.controls;
  }
}
