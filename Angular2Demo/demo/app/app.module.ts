import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from"@angular/forms";
import {RouterModule}  from "@angular/router";
import { HttpModule }    from '@angular/http';

import {AppComponent} from './app.component';   //write my ourselves
import { HeroDetailComponent} from "./component/hero-detail.component";
import {HeroesComponent} from "./component/heroes.component";
import { HeroService } from "./service/hero.service";
import { DashboardComponent } from "./component/dashboard.component";



@NgModule({      //dependent module
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "detail/:id",
        component: HeroDetailComponent
      },
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      }
    ])
   ],  
  declarations: [ 
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}