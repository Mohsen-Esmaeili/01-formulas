import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VisualizeModule } from '../visualize/visualize.module';
import { HomeComponent } from './home.component';


const COMPONENTS = [HomeComponent];
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const MATERIAL_MODULES = [MatFormFieldModule, MatInputModule, MatDividerModule];
const FORMULA_MODULES = [VisualizeModule];

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
  ]
})
export class HomeModule { }
