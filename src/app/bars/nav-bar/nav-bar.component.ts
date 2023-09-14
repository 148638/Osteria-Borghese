import { Component } from '@angular/core';
import { aboutRoute, homeRoute, menuRoute, title } from '../../shared/domain';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  protected readonly aboutRoute = aboutRoute;
  protected readonly menuRoute = menuRoute;
  protected readonly homeRoute = homeRoute;
  protected readonly title = title;
}
