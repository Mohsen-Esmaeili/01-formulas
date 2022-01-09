// Base Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// Components
import { NotFoundComponent } from './not-found.component';

const BASE_MODULES = [CommonModule];
const COMPONENTS = [NotFoundComponent];
const MATERIAL_MODULES = [MatButtonModule, MatIconModule];

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
export class NotFoundModule { }
