import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import {
  aboutRoute, adminRoute,
  homeRoute,
  menuRoute,
  noRoute,
  notFoundRoute,
} from './shared/domain';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AdminComponent} from "./private/admin/admin.component";

const routes: Routes = [
  { path: noRoute, redirectTo: homeRoute, pathMatch: 'full' },
  { path: homeRoute, component: HomeComponent },
  { path: menuRoute, component: MenuComponent },
  { path: aboutRoute, component: AboutComponent },
  { path: adminRoute, component: AdminComponent },
  { path: '**', redirectTo: notFoundRoute, pathMatch: 'full' },
  { path: notFoundRoute, component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
