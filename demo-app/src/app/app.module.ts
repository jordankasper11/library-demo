import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoLibraryModule } from '@demo/library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DemoLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
