import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FormulizerModule } from './components/formulizer/formulizer.module';
import { HomeModule } from './components/home/home.module';
import { NotFoundModule } from './components/not-found/not-found.module';

const COMPONENTS = [AppComponent];
const BASE_MODULES = [BrowserModule, BrowserAnimationsModule, NgbModule];
const FORMULA_MODULES = [HomeModule, FormulizerModule, NotFoundModule];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...BASE_MODULES,
    ...FORMULA_MODULES,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
