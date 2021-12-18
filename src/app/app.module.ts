import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './components/home/home.module';
import { FormulaHelperService } from './services/formula-helper.service';
import { FormulaService } from './services/formula.service';

const COMPONENTS = [AppComponent];
const BASE_MODULES = [BrowserModule, FormsModule, BrowserAnimationsModule, NgbModule];
const FORMULA_MODULES = [HomeModule];
const SERVICES = [FormulaService, FormulaHelperService];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...BASE_MODULES,
    ...FORMULA_MODULES,
    AppRoutingModule
  ],
  providers: [
    ...SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
