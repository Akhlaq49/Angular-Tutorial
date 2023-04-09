import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { MY_HTTP_CLIENT } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [{ provide: MY_HTTP_CLIENT, useExisting: HttpClient }],
  bootstrap: [AppComponent]
})
export class AppModule { }
