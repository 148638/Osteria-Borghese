import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private storage: AngularFireStorage) {}

  public uploadImage(file: File): Promise<string> {
    const filePath = `menu/${Date.now()}_${file.name}`;
    const task = this.storage.upload(filePath, file);
    return task
      .then(() => {
        console.log('Image uploaded successfully');
        return filePath;
      })
      .catch((error) => {
        console.error('Error uploading photo:', error);
        throw error;
      });
  }

  public getImage(path: string): Observable<string> {
    return this.storage.ref(path).getDownloadURL();
  }
}
