import { Component } from '@angular/core';
import { Hero } from '../hero';
import { Product } from '../Product';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  data: Product[] = [];
  constructor(private heroService: HeroService) {

  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  getProduct(): void {
     this.heroService.getProducts().subscribe((x) => {
      this.data = x;
      console.log(this.data);
    });
  }
  
  ngOnInit(): void {
    this.getHeroes();
    this.getProduct();
  }
  selectedHero?: Hero;
 onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
