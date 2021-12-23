import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulizerComponent } from './components/formulizer/formulizer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formulizer", component: FormulizerComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
