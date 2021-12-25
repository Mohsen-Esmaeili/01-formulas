import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Node } from '../../models/node';
import { NodeManagerService } from '../../services/node-manager.service';
import { SharedService } from './../../services/shared.service';

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
  formula = new FormControl('(2 + $a) + ($a + 4)');
  updateEmitterSubscription: Subscription;

  constructor(private nodeManagerService: NodeManagerService,
    private router: Router,
    private sharedService: SharedService) { }

  ngOnInit(): void
  {
    this.updateEmitterSubscription = this.sharedService.updatedEmitter.subscribe(response =>
    {
      this.formula.setValue(this.node.getString());
    });
  }

  updateAstView()
  {
    this.node = this.nodeManagerService.Load(this.formula.value);
    this.syntaxTreeJson = JSON.stringify(this.node, null, 2);
  }

  convertAstToFormula()
  {
    this.node = this.nodeManagerService.Load(this.formula.value);
    this.visualizerOutput = this.node.getString();
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
