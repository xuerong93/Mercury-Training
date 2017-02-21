import { Component } from "@angular/core";
import {OnInit} from "@angular/core";
import { Hero } from "../vo/hero";
import { HeroService } from "../service/hero.service";

@Component({
    selector: "my-dashboard",
    moduleId: module.id,
    templateUrl: "../template/dashboard.component.html",
    styleUrls: ["../css/dashboard.component.css"],
    providers: [HeroService]
})

export class DashboardComponent implements OnInit{
    heroes: Hero[];
    constructor(private heroService: HeroService){

    }
    ngOnInit():void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }
}