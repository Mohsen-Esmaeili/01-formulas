// Base Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
// Services
import { NodeManagerService } from 'src/app/services/node-manager.service';
// Modules
import { ExpressionModule } from './expression/expression.module';
// Components
import { FormulizerComponent } from './formulizer.component';


const COMPONENTS = [FormulizerComponent];
const BASE_MODULES = [CommonModule, ReactiveFormsModule];
const MATERIAL_MODULES = [MatFormFieldModule, MatInputModule, MatDividerModule, MatButtonModule, MatTabsModule, MatCardModule, MatSnackBarModule];
const FORMULA_MODULES = [ExpressionModule];
const SERVICES = [NodeManagerService];


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES,
    ...FORMULA_MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...BASE_MODULES,
    ...MATERIAL_MODULES,
    ...FORMULA_MODULES
  ],
  providers: [
    ...SERVICES
  ]
})
export class FormulizerModule { }
