import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ExploreComponent } from './explore/explore.component'

const routes: Routes = [
    { path: 'book', component: BookComponent },
    { path: 'explore', component: ExploreComponent },
    { path: '**', component: ExploreComponent }
  ];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}