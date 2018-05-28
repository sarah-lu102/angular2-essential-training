//media item component. we want to use this from within the app component
// (the media item component is a component within the app component)

import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  /*****for interpolation example ****/
  // name = 'The Redemption';
  // wasWatched() {
  //   return true;
  // }

  @Input() mediaItem; // tells Angular that we want it to support any property bindings placed on instances of the mw-media-item elements where the property name is mediaItem.

  @Output() delete = new EventEmitter();
  onDelete(){
    this.delete.emit(this.mediaItem);
  }
}