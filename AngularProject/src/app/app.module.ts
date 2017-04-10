import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent  } from './app.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { RootModule } from "app/root-module/root.module";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ProgressBarComponent } from 'app/progress-bar/progress-bar.component';

@NgModule({
  declarations: [  ],
  imports: [
    BrowserModule,
   RootModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2AutoCompleteModule

  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
