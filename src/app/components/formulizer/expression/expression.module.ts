import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ExpressionService } from '../../../services/expression.service';
import { ExpressionHostDirective } from './../../../directives/expression-host.directive';
import { AddNodePositionComponent } from './add-node-position/add-node-position.component';
import { ExpressionInputComponent } from './expression-input/expression-input.component';
import { ExpressionListComponent } from './expression-list/expression-list.component';
import { AdditionComponent } from './expression-type/addition/addition.component';
import { DivisionComponent } from './expression-type/division/division.component';
import { EComponent } from './expression-type/e/e.component';
import { EmptyComponent } from './expression-type/empty/empty.component';
import { FunctionComponent } from './expression-type/function/function.component';
import { MultiplicationComponent } from './expression-type/multiplication/multiplication.component';
import { NodeComponent } from './expression-type/node/node.component';
import { ParenComponent } from './expression-type/paren/paren.component';
import { PiComponent } from './expression-type/pi/pi.component';
import { PowerComponent } from './expression-type/power/power.component';
import { SubtractionComponent } from './expression-type/subtraction/subtraction.component';
import { ValueComponent } from './expression-type/value/value.component';
import { VariableComponent } from './expression-type/variable/variable.component';
import { ExpressionComponent } from './expression.component';

const COMPONENTS = [AddNodePositionComponent, ExpressionInputComponent, ExpressionComponent, ExpressionListComponent, EmptyComponent, AdditionComponent, SubtractionComponent, DivisionComponent,
  MultiplicationComponent, PowerComponent, ValueComponent, VariableComponent, NodeComponent, ParenComponent, FunctionComponent, EComponent, PiComponent];
const DIRECTIVES = [ExpressionHostDirective];
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const MATERIAL_MODULES = [MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule, MatDividerModule, MatBadgeModule, MatFormFieldModule, MatInputModule, MatListModule];
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
