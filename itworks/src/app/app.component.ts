import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Doc Gyneco' },
  { id: 12, name: 'Karice' },
  { id: 13, name: 'Bob Morane' },
  { id: 14, name: 'Trichelieu' },
  { id: 15, name: 'Miss Princesse Lila' },
  { id: 16, name: 'Oui-Oui' },
  { id: 17, name: 'Zizimir' },
  { id: 18, name: '' },
  { id: 19, name: 'Guigui la Menace' },
  { id: 20, name: 'Dark Lizzie' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

