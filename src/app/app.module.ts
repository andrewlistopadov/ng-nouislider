import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormControlPipe} from './form-control.pipe';
import {NgNoUiSliderSliderModule} from './ng-nouislider/ng-nouislider.module';

@NgModule({
  declarations: [AppComponent, FormControlPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgNoUiSliderSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
