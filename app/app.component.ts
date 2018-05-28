import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  // template: `
  //   <h1>My App</h1>
  //   <p>Keeping track of the media I want to watch.</p>
  // `

  //same as setting templateURL with the file path to the html file, like so
  templateUrl: 'app/app.component.html',

  // styles: [`
  //   h1 { color: #ffffff; }
  //   .description{
  //     font-style: italic;
  //     color: green;
  //   }
  // `]

  //alternatively...styleUrls takes a string of the path to the css file
  styleUrls: ['app/app.component.css']

})
export class AppComponent {
  onMediaItemDelete(mediaItem){
    
  }

  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };
}