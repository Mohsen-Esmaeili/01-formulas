import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// @ts-ignore
import * as Parser from '../../parser/formula-parser.js';
import { FormulaService } from './../../services/formula.service';

const parse = Parser.parse;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{

  // formula: string = "($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)";
  // formula: string = "($b - 4 - $a) - (2 -  $a)";
  visualizerOutput: string = "";
  syntaxTree: any;
  syntaxTreeJson: string = "";

  form: FormGroup;

  constructor(private formulaService: FormulaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void
  {
    this.form = this.formBuilder.group({
      formula: ['($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)']
    });
  }

  updateAstView()
  {
    if (this.form?.invalid)
    {
      return;
    }

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
