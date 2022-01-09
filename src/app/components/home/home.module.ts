// Base Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
// Components
import { HomeComponent } from './home.component';


const COMPONENTS = [HomeComponent];
const BASE_MODULES = [CommonModule];
const MATERIAL_MODULES = [MatButtonModule, MatDividerModule, MatIconModule];

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
export class HomeModule { }
