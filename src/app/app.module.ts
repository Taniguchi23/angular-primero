import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';


import {CounterModule} from "./counter/components/counter.module";
import {HeroesModule} from "./heroes/heroes.module";
import {DbzModule} from "./dbz/dbz.module";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    CommonModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
