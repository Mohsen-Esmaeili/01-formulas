import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { NodeManagerService } from 'src/app/services/node-manager.service';
import { VisualizeModule } from './../visualize/visualize.module';
import { FormulizerComponent } from './formulizer.component';

const COMPONENTS = [FormulizerComponent];
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const MATERIAL_MODULES = [MatFormFieldModule, MatInputModule, MatDividerModule, MatButtonModule, MatTabsModule];
const FORMULA_MODULES = [VisualizeModule];
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
