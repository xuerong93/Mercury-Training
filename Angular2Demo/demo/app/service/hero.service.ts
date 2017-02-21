import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import { Hero } from "../vo/hero";
import 'rxjs/add/operator/toPromise';
// const HEROES: Hero[] = [          //const block scope
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];


@Injectable()
export class HeroService {        //all service should be injectable
    private url = "http://sample-env.3vfxhpyrbb.us-west-2.elasticbeanstalk.com/rest/heroes";
    getHeroes() : Promise<Hero[]> {
        return this.http.get(this.url).toPromise()
                    .then(res => res.json() as Hero[])
                    .catch(this.handleError);
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getHero(id:number) : Promise<Hero>{
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id == id));
    }  

    constructor(private http: Http){

    }
}