import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './book.component';
import { HtmlPipe } from './html.pipe'
import { OpacityDirective } from './opacity.directive';
import { TreeComponent } from './tree.component'

@NgModule({
  declarations: [
    BookComponent,
    TreeComponent,
    HtmlPipe,
    OpacityDirective
  ],
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
})
export class BookModule { }
