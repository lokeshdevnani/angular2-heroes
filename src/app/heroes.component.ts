import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes:Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(private heroService: HeroService){
    //
  }
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then( heroes => this.heroes = heroes );
  }
}
