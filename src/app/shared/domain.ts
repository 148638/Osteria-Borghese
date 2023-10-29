export const noRoute = '';
export const homeRoute = 'home';
export const menuRoute = 'menu';
export const aboutRoute = 'about';
export const notFoundRoute = '404';
export const adminRoute = 'admin';
export const adminDetails: { username: string; password: string } = {
  username: 'admin',
  password: 'admin',
}

export const title = 'Osteria Borghese';

export interface Category {
  name: string;
  menuItems: MenuItem[];
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  imgSrc: string;
}
