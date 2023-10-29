import { Component, OnInit } from '@angular/core';
import { Modal } from 'flowbite';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ImageService } from '../../shared/services/image/image.service';
import { image } from 'ionicons/icons';
import { DbService } from '../../shared/services/db/db.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  // Authentication
  isAuthenticated: boolean = true;
  // Form for [name, password]
  loginForm: FormGroup;
  loginModal: Modal | undefined;
  // New Food Item
  newMenuItemModal: Modal | undefined;
  newMenuItemForm: FormGroup;
  // Pre edit menu item
  preEditModal: Modal | undefined;
  // Edit menu item
  editModal: Modal | undefined;
  editMenuItemForm: FormGroup;

  // Image loading/loaded states
  imageLoading: boolean = false;
  imageLoaded: boolean = false;

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
  selectedCategory = this.menuCategories[0];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly imageService: ImageService,
    private readonly dbService: DbService
  ) {
    this.loginForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.newMenuItemForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      imgSrc: new FormControl('', Validators.required), // TODO: Add firebase storage
    });
    this.editMenuItemForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      imgSrc: new FormControl('', Validators.required), // TODO: Add firebase storage
    });
  }

  ngOnInit(): void {
    if (!this.isAuthenticated) this.toggleLoginModal();
    this.dbService.getMenu();
  }

  // Manage authentication
  authenticate = (): void => {
    console.log(
      'Authenticate with:',
      this.loginForm.get('name')?.value,
      this.loginForm.get('password')?.value
    );
    // TODO: Implement authentication
    this.isAuthenticated = true;
    this.toggleLoginModal();
  };

  // Manage modal
  toggleLoginModal = (): void => {
    const $loginModal = document.getElementById('login-modal');
    const options: {} | undefined = {
      backdrop: true,
      keyboard: true,
      focus: true,
      closable: false,
    };
    if (!this.loginModal) this.loginModal = new Modal($loginModal, options);
    this.loginModal.toggle();
  };

  // New menu item
  toggleNewMenuItemModal = (): void => {
    const $newMenuItemModal = document.getElementById('new-menu-item-modal');
    const options: {} | undefined = {
      backdrop: true,
      keyboard: true,
      focus: true,
      closable: false,
    };
    if (!this.newMenuItemModal)
      this.newMenuItemModal = new Modal($newMenuItemModal, options);
    this.newMenuItemModal.toggle();
  };

  // Pre edit menu item
  togglePreEditModal = (category?: any): void => {
    const $preEditModal = document.getElementById('pre-edit-modal');
    const options: {} | undefined = {
      backdrop: true,
      keyboard: true,
      focus: true,
    };
    if (!this.preEditModal)
      this.preEditModal = new Modal($preEditModal, options);
    if (category) this.selectedCategory = category;
    console.log('Selected category:', this.selectedCategory);
    this.preEditModal.toggle();
  };

  // Edit menu item
  toggleEditModal = (item?: any): void => {
    if (item) {
      this.togglePreEditModal();
      console.log('Edit item:', item);
      this.editMenuItemForm.setValue({
        name: item.name,
        description: item.description,
        price: item.price.split('€')[0],
        imgSrc: item.imgSrc,
      });
    }
    const $editModal = document.getElementById('editItemModal');
    const options: {} | undefined = {
      backdrop: true,
      keyboard: true,
      focus: true,
      closable: false,
    };
    if (!this.editModal) this.editModal = new Modal($editModal, options);
    this.editModal.toggle();
  };

  // Delete menu item
  toggleDeleteModal = (item: {}): void => {
    console.log('Delete item:', item);
  };
  protected readonly image = image;

  // Upload image
  handleFileInput = (event: any, form: FormGroup): void => {
    const file = event.target.files[0];
    this.imageLoading = true;
    this.imageLoaded = false;
    // Get the filepath from the upload, then once the promise is resolved, request the getDownloadURL from getImage, then set the value of the form control to the url
    this.imageService.uploadImage(file).then((filePath) => {
      this.imageService.getImage(filePath).subscribe((url) => {
        form.get('imgSrc')?.setValue(url);
        this.imageLoading = false;
        this.imageLoaded = true;
      });
    });
  };
}
