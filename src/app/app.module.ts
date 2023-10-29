import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './bars/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './bars/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './private/admin/admin.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    FooterComponent,
    NotFoundComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environment.firebase}],
  bootstrap: [AppComponent],
})
export class AppModule {}
