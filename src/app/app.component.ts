import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  notAdminRoute: boolean = true;

  constructor(readonly router: Router) {}

  ngOnInit(): void {
    initFlowbite();
  }

}
