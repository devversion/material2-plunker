import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
  selector: 'material-app',
  templateUrl: 'src/app.component.html',
  directives: [MdToolbar]
})
export class AppComponent {}

bootstrap(AppComponent);