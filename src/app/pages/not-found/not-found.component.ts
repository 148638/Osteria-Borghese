import { Component } from '@angular/core';
import {homeRoute} from "../../shared/domain";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

    protected readonly homeRoute = homeRoute;
}
