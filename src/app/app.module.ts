import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormulaHelperService } from './services/formula-helper.service';
import { FormulaService } from './services/formula.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FormulaService, FormulaHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
