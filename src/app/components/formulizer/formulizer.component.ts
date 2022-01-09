import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Node } from '../../models/node';
import { NodeManagerService } from '../../services/node-manager.service';
import { ExpressionService } from './../../services/expression.service';

@Component({
  selector: 'app-formulizer',
  templateUrl: './formulizer.component.html',
  styleUrls: ['./formulizer.component.scss']
})
export class FormulizerComponent implements OnInit, OnDestroy
{

  // formula: string = "($b + SQRT (SQR($b) - (4 * $a))) / (2 * $a)";
  // formula: string = "($b - 4 - $a) - (2 -  $a)";
  visualizerOutput: string = "";
  syntaxTreeJson: string = "";
  node: Node;
  formula = new FormControl('((((($b + (4 * $a)) - ($a / 2))^5) * SQRT((25 * $g))) + PI)');
  updateEmitterSubscription: Subscription;

  constructor(private nodeManagerService: NodeManagerService,
    private router: Router,
    private expressionService: ExpressionService) { }

  ngOnInit(): void
  {
    this.update();
    this.updateEmitterSubscription = this.expressionService.updatedEmitter.subscribe(response =>
    {
      this.formula.setValue(this.node.string);
      this.update();
    });
  }

  onBlur(): void
  {
    this.update();
  }

  update(): void
  {
    if (this.formula.invalid)
    {
      return;
    }

    this.node = this.nodeManagerService.Load(this.formula.value);
    this.syntaxTreeJson = JSON.stringify(this.node, null, 2);
    this.visualizerOutput = this.node.string;
  }

  onGoHome(): void
  {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void
  {
    this.updateEmitterSubscription?.unsubscribe();
  }
}
