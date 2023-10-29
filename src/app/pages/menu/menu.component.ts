import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuCategories = [
    {
      name: 'Pasta',
      items: [
        {
          name: 'Spaghetti Bolognese',
          description:
            'A classic Italian pasta dish with a rich tomato and meat sauce.',
          price: '12.50€',
          imgSrc:
            'https://media-cdn.tripadvisor.com/media/photo-o/18/1a/99/68/20190628-203601-largejpg.jpg',
        },
        {
          name: 'Penne Alfredo',
          description: 'Creamy Alfredo sauce over tender penne pasta.',
          price: '11.00€',
          imgSrc:
            'https://media-cdn.tripadvisor.com/media/photo-o/18/1a/99/68/20190628-203601-largejpg.jpg',
        },
        // Add more pasta items here
      ],
    },
    {
      name: 'Pizza',
      items: [
        {
          name: 'Margherita Pizza',
          description: 'Tomato sauce, mozzarella, and fresh basil.',
          price: '10.00€',
          imgSrc:
            'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
        },
        {
          name: 'Pepperoni Pizza',
          description: 'Classic pizza with pepperoni slices and cheese.',
          price: '11.50€',
          imgSrc:
            'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
        },
        // Add more pizza items here
      ],
    },
    {
      name: 'Drinks',
      items: [
        {
          name: 'House Red Wine',
          description: 'A glass of our finest house red wine.',
          price: '5.00€',
          imgSrc:
            'https://media-cdn.tripadvisor.com/media/photo-p/18/1a/99/65/img-20190628-wa0011-largejpg.jpg',
        },
        {
          name: 'Lemonade',
          description: 'Freshly squeezed lemons with a touch of sweetness.',
          price: '3.00€',
          imgSrc:
            'https://media-cdn.tripadvisor.com/media/photo-p/18/1a/99/65/img-20190628-wa0011-largejpg.jpg',
        },
        // Add more drinks items here
      ],
    },
    // Add more categories here
  ];
}
