import { Component, OnInit } from '@angular/core';

declare  const CKEDITOR: any;

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  title = 'app';
  editor:any = {};
  ngOnInit() {
    CKEDITOR.replace( 'content' );
  }

  getData(){
    const data = this.editor.getData();
    alert(data);
  }

}
