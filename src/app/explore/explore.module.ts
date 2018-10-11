import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExploreComponent } from './explore.component';

@NgModule({
  declarations: [
    ExploreComponent
  ],
  providers: [],
  exports: [ExploreComponent]
})
export class ExploreModule { }
