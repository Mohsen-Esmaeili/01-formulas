import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InputComponent } from './input/input.component';
import { OperatorComponent } from './operator/operator.component';
import { VisualizeDetailComponent } from './visualize-detail/visualize-detail.component';
import { VisualizeComponent } from './visualize.component';

const COMPONENTS = [VisualizeComponent, OperatorComponent, InputComponent];
const BASE_MODULES = [CommonModule];
const MATERIAL_MODULES = [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule];

@NgModule({
  declarations: [
    ...COMPONENTS,
    VisualizeDetailComponent
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
export class VisualizeModule { }
