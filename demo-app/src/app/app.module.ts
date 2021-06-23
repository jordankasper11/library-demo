import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SampleComponentModule } from '@demo/library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
