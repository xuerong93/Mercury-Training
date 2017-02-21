import { Component } from '@angular/core';
import { OnInit} from "@angular/core";
import { Hero } from '../vo/hero';
import { HeroService } from "../service/hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',  //element directive
  moduleId: module.id, //use relative path instead of absolute path
  /*
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
  `
  */


  templateUrl: "../template/heroes.component.html",
  styleUrls : ["../css/heroes.component.css"],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit { 
    hero: Hero = {
      id: 1,
      name: "windstorm"
    };
    heroes : Hero[]; 
    selectedHero: Hero;


    onSelect (hero: Hero) : void {
      this.selectedHero = hero;
    }

    constructor(private heroService: HeroService,
                private  router: Router,
    ){    //heroService is an object, the instance of HeroService

    }

    ngOnInit(): void{
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);  //avoid the getHeroes() return promise
      //=> Arrow operation
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}