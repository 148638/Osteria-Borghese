import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { NavBarComponent } from './bars/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './bars/footer/footer.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
