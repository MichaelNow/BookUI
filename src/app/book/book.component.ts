import { Component, OnInit, OnChanges,AfterViewInit, AfterViewChecked, AfterContentChecked,  ElementRef, ViewChild} from '@angular/core';
import { NgClass } from '@angular/common'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

declare  const CKEDITOR: any;
declare var jQuery:any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [
    trigger('menuToggled', [
      state('inactive', style({
        width: 0,
      })),
      state('active',   style({
        width: 240,
      })),
      transition('* => *', animate(250)),
    ]),
    trigger('bodyToggled', [
      state('inactive', style({
        'margin-left': 0,
      })),
      state('active',   style({
        'margin-left': 240,
      })),
      transition('* => *', animate(250)),
    ]),
  ]
})
export class BookComponent implements OnChanges, AfterViewInit, AfterContentChecked, AfterViewChecked {
  title = 'app';
  content = "<blockquote><p>ddffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd</p><p>dfd</p></blockquote><p>ddfddffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfdf</p>"
  menuOpen = 'active';
  titleHover = false;
  iconOpacity = 0.5;
  isEditing = false;
  editor: any = {};
  @ViewChild('editorBackground')
  backgroundDiv: ElementRef;
  @ViewChild('editorMeta')
  metaDiv: any;
  @ViewChild('editorBody')
  bodyDiv: any;

  ngAfterViewInit() {
  //   this.backgroundDiv.nativeElement.bind('DOMNodeInserted', function(e) {
  //     alert('element now contains: ' + jQuery(e.target).html());
  // });
    // this.onResize();
  }

  ngOnChanges() {

  }

  ngAfterContentChecked() {
    // this.onResize();
  }

  ngAfterViewChecked() {
    this.onResize();
  }

  ngOnInit() {
      CKEDITOR.replace( 'content');
  }

  getData(){
    const data = this.editor.getData();
    alert(data);
  }

  toggleMenu() {
    if(this.menuOpen == 'active') {
      this.menuOpen = 'inactive';
    } else {
      this.menuOpen = 'active';
    }
  }

  mouseEnter() {
    this.titleHover = true;
  }

  mouseLeave() {
    this.titleHover = false;
  }

  showEditor(edit: boolean) {
    this.isEditing = edit;
  }

  onResize() {
    let backgroundHeight = this.backgroundDiv.nativeElement.offsetHeight;
    let metaHeight = this.metaDiv.nativeElement.offsetHeight;
    let topHeight = jQuery("#cke_1_top").height();
    let targetHeight = backgroundHeight - metaHeight- topHeight -10;
    jQuery("#cke_editor").css("height", (targetHeight) + "px");
    jQuery(".cke_inner").css("height", (targetHeight) + "px");
    jQuery(".cke_contents").css("height", (targetHeight) + "px");
    
    this.bodyDiv.nativeElement.height = targetHeight;
    // jQuery("#cke_editor").css("min-height", (targetHeight) + "px");
  }
}
