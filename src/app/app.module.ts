import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './components/home/home.module';

const COMPONENTS = [AppComponent];
const BASE_MODULES = [BrowserModule, FormsModule, BrowserAnimationsModule, NgbModule];
const FORMULA_MODULES = [HomeModule];

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
