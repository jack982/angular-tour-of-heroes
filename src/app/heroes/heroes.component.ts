import { Component, OnInit, Output } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { EventEmitter } from 'events';
import { HeroService } from '../hero.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService:HeroService) {
  
   }

  ngOnInit() {
    this.getHeroes();
  }


  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
     this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
