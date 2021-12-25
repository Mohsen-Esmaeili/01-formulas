import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ExpressionService } from '../../../services/expression.service';
import { ExpressionHostDirective } from './../../../directives/expression-host.directive';
import { AddNodePositionComponent } from './add-node-position/add-node-position.component';
import { ExpressionListComponent } from './expression-list/expression-list.component';
import { AdditionComponent } from './expression-type/addition/addition.component';
import { DivisionComponent } from './expression-type/division/division.component';
import { EmptyComponent } from './expression-type/empty/empty.component';
import { MultiplicationComponent } from './expression-type/multiplication/multiplication.component';
import { NodeComponent } from './expression-type/node/node.component';
import { ParenComponent } from './expression-type/paren/paren.component';
import { PowerComponent } from './expression-type/power/power.component';
import { SubtractionComponent } from './expression-type/subtraction/subtraction.component';
import { ValueComponent } from './expression-type/value/value.component';
import { VariableComponent } from './expression-type/variable/variable.component';
import { ExpressionComponent } from './expression.component';

const COMPONENTS = [AddNodePositionComponent, ExpressionComponent, ExpressionListComponent, EmptyComponent, AdditionComponent, SubtractionComponent, DivisionComponent,
  MultiplicationComponent, PowerComponent, ValueComponent, VariableComponent, NodeComponent, ParenComponent];
const DIRECTIVES = [ExpressionHostDirective];
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const MATERIAL_MODULES = [MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule, MatDividerModule, MatBadgeModule];
const SERVICES = [ExpressionService];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...BASE_MODULES,
    ...MATERIAL_MODULES
  ],
  providers: [
    ...SERVICES
  ]
})
export class ExpressionModule { }
