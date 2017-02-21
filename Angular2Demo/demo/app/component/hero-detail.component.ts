import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { HeroService } from '../service/hero.service';
import { Hero } from "../vo/hero";


@Component({      //element directive
    selector: "my-hero-detail",
    moduleId: module.id,
    templateUrl: "../template/hero-detail.component.html",
    styleUrls: ["../css/hero-detail.component.css"],
    providers: [HeroService]
})

export class HeroDetailComponent {
    @Input()      //transfer an object into this file
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){

    }
    
    ngOnInit():void{
        this.route.params   
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack():void {
        this.location.back();
    }
}