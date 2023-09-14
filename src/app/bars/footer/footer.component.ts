import { Component } from '@angular/core';
import {title} from "../../shared/domain";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

    protected readonly title = title;
}
