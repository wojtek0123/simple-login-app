export interface Page {
  title: string;
  titleSEO: string;
  createDate: string;
  author: string;
  descriptionSEO: string;
  description: string;
  keywords: string;
}

export const pages = [
  {
    title: 'Lorem ipsum dolor sit amet.',
    createDate: new Date().toLocaleString(),
    author: 'Ut eget',
    titleSEO: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    descriptionSEO:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    keywords: '',
  },
  {
    title: 'Suspendisse potenti',
    createDate: new Date().toLocaleString(),
    author: 'Mauris a',
    titleSEO: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    descriptionSEO:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    keywords: '',
  },
  {
    title: 'Quisque a imperdiet',
    createDate: new Date().toLocaleString(),
    author: 'Ut quis',
    titleSEO: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    descriptionSEO:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    keywords: '',
  },
  {
    title: 'Donec pharetra tempus quam',
    createDate: new Date().toLocaleString(),
    author: 'Vestibulum elementum',
    titleSEO: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    descriptionSEO:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    keywords: '',
  },
  {
    title: 'Suspendisse tempus',
    createDate: new Date().toLocaleString(),
    author: 'Cras nec',
    titleSEO: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    descriptionSEO:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    keywords: '',
  },
  {
    title: 'Etiam non ipsum',
    createDate: new Date().toLocaleString(),
    author: 'Nam risus',
    titleSEO: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    descriptionSEO:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    keywords: '',
  },
  {
    title: 'Pellentesque non orci ultrices, porta',
    createDate: new Date().toLocaleString(),
    author: 'Donec congue',
    titleSEO: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    descriptionSEO:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    keywords: '',
  },
  {
    title: 'Integer sit',
    createDate: new Date().toLocaleString(),
    author: 'Nulla tortor',
    titleSEO: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    descriptionSEO:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    keywords: '',
  },
  {
    title: 'Orci varius',
    createDate: new Date().toLocaleString(),
    author: 'Proin aliquam',
    titleSEO: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    descriptionSEO:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    keywords: '',
  },
  {
    title: 'Quisque gravida, lectus',
    createDate: new Date().toLocaleString(),
    author: 'Praesent tincidunt',
    titleSEO: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    descriptionSEO:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas ligula lectus, quis ornare turpis convallis iaculis. Sed dui felis.',
    keywords: '',
  },
];

export const desserts = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: '1%',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: '1%',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: '7%',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: '8%',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: '16%',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: '0%',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: '2%',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: '45%',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: '22%',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: '6%',
  },
];

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  typeOfAccount: 'Admin' | 'User' | 'Moderator';
  createdDate: string;
  author: string;
  note: string;
}

export const users: User[] = [
  {
    firstName: 'Maecenas',
    lastName: 'Laoreet',
    email: 'maecenas@email.com',
    typeOfAccount: 'Admin',
    createdDate: new Date().toLocaleString(),
    author: 'Phasellus Ultrices',
    note: 'Suspendisse feugiat porttitor ex in malesuada. Aenean elementum neque metus, et scelerisque sapien fringilla ac. Cras venenatis, odio in gravida venenatis, tortor lorem gravida urna.',
  },
  {
    firstName: 'Nam',
    lastName: 'Pellentesque',
    email: 'pellentesque@email.com',
    typeOfAccount: 'User',
    createdDate: new Date().toLocaleString(),
    author: 'Pellentesque Posuere',
    note: 'Suspendisse feugiat porttitor ex in malesuada. Aenean elementum neque metus, et scelerisque sapien fringilla ac. Cras venenatis, odio in gravida venenatis, tortor lorem gravida urna.',
  },
  {
    firstName: 'Sed',
    lastName: 'Cursus',
    email: 'cursus@email.com',
    typeOfAccount: 'User',
    createdDate: new Date().toLocaleString(),
    author: 'Curabitur Dui',
    note: 'Suspendisse feugiat porttitor ex in malesuada. Aenean elementum neque metus, et scelerisque sapien fringilla ac. Cras venenatis, odio in gravida venenatis, tortor lorem gravida urna.',
  },
  {
    firstName: 'Aliquam',
    lastName: 'Erat',
    email: 'aliquam_erat@email.com',
    typeOfAccount: 'Moderator',
    createdDate: new Date().toLocaleString(),
    author: 'Aliquam Ante',
    note: 'Suspendisse feugiat porttitor ex in malesuada. Aenean elementum neque metus, et scelerisque sapien fringilla ac. Cras venenatis, odio in gravida venenatis, tortor lorem gravida urna.',
  },
  {
    firstName: 'Suspendisse',
    lastName: 'Laoreet',
    email: 'suspendisse_Laoreet@email.com',
    typeOfAccount: 'User',
    createdDate: new Date().toLocaleString(),
    author: 'Donec Vitae',
    note: 'Suspendisse feugiat porttitor ex in malesuada. Aenean elementum neque metus, et scelerisque sapien fringilla ac. Cras venenatis, odio in gravida venenatis, tortor lorem gravida urna.',
  },
  {
    firstName: 'Mauris',
    lastName: 'Ornare',
    email: 'ornare@email.com',
    typeOfAccount: 'User',
    createdDate: new Date().toLocaleString(),
    author: 'Etiam Magna',
    note: 'Suspendisse feugiat porttitor ex in malesuada. Aenean elementum neque metus, et scelerisque sapien fringilla ac. Cras venenatis, odio in gravida venenatis, tortor lorem gravida urna.',
  },
  {
    firstName: 'Praesent',
    lastName: 'Congue',
    email: 'praesent@email.com',
    typeOfAccount: 'User',
    createdDate: new Date().toLocaleString(),
    author: 'Pellentesque Nulla',
    note: 'Suspendisse feugiat porttitor ex in malesuada. Aenean elementum neque metus, et scelerisque sapien fringilla ac. Cras venenatis, odio in gravida venenatis, tortor lorem gravida urna.',
  },
  {
    firstName: 'Proin',
    lastName: 'Nisl',
    email: 'proinnisl@email.com',
    typeOfAccount: 'Moderator',
    createdDate: new Date().toLocaleString(),
    author: 'Cras Ullamcorper',
    note: 'Suspendisse feugiat porttitor ex in malesuada. Aenean elementum neque metus, et scelerisque sapien fringilla ac. Cras venenatis, odio in gravida venenatis, tortor lorem gravida urna.',
  },
  {
    firstName: 'Nunc',
    lastName: 'Semper',
    email: 'semper@email.com',
    typeOfAccount: 'User',
    createdDate: new Date().toLocaleString(),
    author: 'Praesent Vestibulum',
    note: 'Suspendisse feugiat porttitor ex in malesuada. Aenean elementum neque metus, et scelerisque sapien fringilla ac. Cras venenatis, odio in gravida venenatis, tortor lorem gravida urna.',
  },
];
