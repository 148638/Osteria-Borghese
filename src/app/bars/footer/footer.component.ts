import { Component } from '@angular/core';
import { title } from '../../shared/domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  protected readonly title = title;

  facebookLink = 'https://www.facebook.com/OsteriaBorgheseLocarno/';
  instagramLink = 'https://www.instagram.com/osteriaborghese/';
  tripAdvisorLink =
    'https://www.tripadvisor.de/Restaurant_Review-g188094-d2200948-Reviews-Osteria_Borghese-Locarno_Lake_Maggiore_Canton_of_Ticino_Swiss_Alps.html';
  googleMapsLink = 'https://maps.app.goo.gl/4iyxXo74QsMrVkss6';
}
