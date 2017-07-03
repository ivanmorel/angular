import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';
import {Hero} from './hero';
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div><label>name: </label>{{hero.name}}</div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
}
