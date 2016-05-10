import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  directives: [MdToolbar, MdButton]
})
export class AppComponent {}

bootstrap(AppComponent);

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */