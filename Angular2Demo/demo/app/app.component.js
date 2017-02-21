"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// import { OnInit} from "@angular/core";
// import { Hero } from './vo/hero';
// import { HeroService } from "./service/hero.service"
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Title of Heroes";
        // hero: Hero = {
        //   id: 1,
        //   name: "windstorm"
        // };
        // heroes : Hero[]; 
        // selectedHero: Hero;
        // onSelect (hero: Hero) : void {
        //   this.selectedHero = hero;
        // }
        // constructor(private heroService: HeroService){    //heroService is an object, the instance of HeroService
        // }
        // ngOnInit(): void{
        //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);  //avoid the getHeroes() return promise
        //   //=> Arrow operation 
        // }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a routerLink = \"/dashboard\">Dashboard</a>\n      <a routerLink = \"/heroes\">Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
        // templateUrl: "./template/heroes.component.html",
        styleUrls: ["./css/app.component.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map