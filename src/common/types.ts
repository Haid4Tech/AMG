export interface IMenuItems {
  title: string;
  url: string;
}

export interface IIcons {
  label: string;
  Icon: React.ElementType;
  url: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  uid: string;
}

export interface Products {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  // not complete
}

export interface News {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedDate: Date;
}
