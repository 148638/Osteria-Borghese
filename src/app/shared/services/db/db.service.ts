import { Injectable } from '@angular/core';
import {addDoc, collection, Firestore, getDocs} from '@angular/fire/firestore';
import {Category, MenuItem} from '../../domain';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private readonly menuCollectionRef = collection(this.firestore, 'menu');

  public menu: Category[] = [] as unknown as Category[];

  constructor(private readonly firestore: Firestore) {}

  // Public methods
  public getMenu = async (): Promise<void> => {
    // Get the menu from menuCollectionRef and assign it to this.menu
    await getDocs(this.menuCollectionRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Category;
        this.menu.push(data);
      });
    });
    console.log(this.menu);
  };

  // Private methods
  public addMenuItem = (item: MenuItem): void => {
    addDoc(this.menuCollectionRef, item).then(() => {
      console.log('Item added successfully');
    }).catch((error) => {
      console.error('Error adding item:', error);
    });
  };

  public addCategory = () => {};

  public deleteMenuItem = () => {};

  public deleteCategory = () => {};
}
