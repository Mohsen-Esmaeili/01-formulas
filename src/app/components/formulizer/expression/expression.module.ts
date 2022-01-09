// Base Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Material Modules
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
// Services
import { ExpressionService } from '../../../services/expression.service';
import { ExpressionHostDirective } from './../../../directives/expression-host.directive';
// Components
import
{
  AdditionComponent, DivisionComponent, EComponent, EmptyComponent, ExpressionComponent, ExpressionListComponent, FunctionComponent, MultiplicationComponent,
  NewNodeConfigComponent, NodeComponent, ParenComponent, PiComponent, PowerComponent, SubtractionComponent, ValueComponent, VariableComponent
} from './index';




const COMPONENTS = [NewNodeConfigComponent, ExpressionComponent, ExpressionListComponent, EmptyComponent, AdditionComponent, SubtractionComponent, DivisionComponent,
  MultiplicationComponent, PowerComponent, ValueComponent, VariableComponent, NodeComponent, ParenComponent, FunctionComponent, EComponent, PiComponent];
const DIRECTIVES = [ExpressionHostDirective];
const BASE_MODULES = [CommonModule, ReactiveFormsModule];
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
