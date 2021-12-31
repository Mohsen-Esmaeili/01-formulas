import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulizerComponent } from './components/formulizer/formulizer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formulizer", component: FormulizerComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" }
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
