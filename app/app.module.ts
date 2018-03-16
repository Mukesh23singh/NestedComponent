import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { CharacterComponent } from './character.component';
import { CharacterListComponent } from './character-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    CharacterComponent,
    CharacterListComponent
  ],
  bootstrap: [CharacterListComponent],
})
export class AppModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/