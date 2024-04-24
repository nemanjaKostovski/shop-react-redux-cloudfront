import { OrderStatus } from '~/constants/order';
import { CartItem } from '~/models/CartItem';
import { Order } from '~/models/Order';
import { AvailableProduct, Product } from '~/models/Product';

export const products: Product[] = [
  {
    description: 'Intriguing mystery novel set in a small town.',
    id: '7567ec4b-b10c-48c5-9345-fc73c48a80ab',
    price: 12.99,
    title: 'Mystery in the Woods',
  },
  {
    description: 'Epic fantasy tale of magic and adventure.',
    id: '7567ec4b-b10c-48c5-9345-fc73c48a80ac',
    price: 15.99,
    title: 'The Quest for Eldoria',
  },
  {
    description: 'Heartwarming story of love and resilience.',
    id: '7567ec4b-b10c-48c5-9345-fc73c48a80ad',
    price: 11.49,
    title: 'Love Against All Odds',
  },
  {
    description: 'Insightful guide to personal development and success.',
    id: '7567ec4b-b10c-48c5-9345-fc73c48a80ae',
    price: 19.99,
    title: 'The Path to Greatness',
  },
  {
    description: 'Thrilling science fiction adventure beyond the stars.',
    id: '7567ec4b-b10c-48c5-9345-fc73c48a80af',
    price: 14.79,
    title: 'Galactic Odyssey',
  },
  {
    description: 'Inspiring biography of a legendary historical figure.',
    id: '7567ec4b-b10c-48c5-9345-fc73c48a80b0',
    price: 18.49,
    title: 'Legacy of Greatness',
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description: 'Short Product Description1',
      id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa',
      price: 24,
      title: 'ProductOne',
    },
    count: 2,
  },
  {
    product: {
      description: 'Short Product Description7',
      id: '7567ec4b-b10c-45c5-9345-fc73c48a80a1',
      price: 15,
      title: 'ProductName',
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: '1',
    address: {
      address: 'some address',
      firstName: 'Name',
      lastName: 'Surname',
      comment: '',
    },
    items: [
      { productId: '7567ec4b-b10c-48c5-9345-fc73c48a80aa', count: 2 },
      { productId: '7567ec4b-b10c-45c5-9345-fc73c48a80a1', count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: 'New order' },
    ],
  },
  {
    id: '2',
    address: {
      address: 'another address',
      firstName: 'John',
      lastName: 'Doe',
      comment: 'Ship fast!',
    },
    items: [{ productId: '7567ec4b-b10c-48c5-9345-fc73c48a80aa', count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: 'Fancy order',
      },
    ],
  },
];
