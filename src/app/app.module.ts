import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// external modules
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

//My Components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
