import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent }  from './app.component';
import { TutorialsComponent } from './tutorial.component';
import { CGridComponent, CGridCellComponent, CGridSpinnerComponent } from './cgrid.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],   ///
    declarations: [AppComponent, TutorialsComponent, CGridComponent, CGridCellComponent, CGridSpinnerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
