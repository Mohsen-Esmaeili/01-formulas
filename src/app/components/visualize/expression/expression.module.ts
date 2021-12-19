import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ExpressionItemComponent } from './expression-item/expression-item.component';
import { ExpressionComponent } from './expression.component';

const COMPONENTS = [ExpressionComponent, ExpressionItemComponent];
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const MATERIAL_MODULES = [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...BASE_MODULES,
    ...MATERIAL_MODULES
  ]
})
export class ExpressionModule { }
