import { Component, Input } from '@angular/core';

import { Character } from './character';

@Component({
  moduleId: module.id,
  selector: 'my-character',
   templateUrl: './character.component.html'
})
export class CharacterComponent {
  @Input() character: Character;
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/