import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VisualizeComponent } from './visualize.component';

const COMPONENTS = [VisualizeComponent];
const BASE_MODULES = [CommonModule];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...BASE_MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...BASE_MODULES
  ]
})
export class VisualizeModule { }
