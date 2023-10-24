import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  {
    id: 4,
    text: 'top deals',
    url: '/top-deals',
  },
];

const productSublinks = [
  {
    id: 1,
    text: 'smartphones',
    url: '/products/smartphones',
  },
  {
    id: 2,
    text: 'laptops',
    url: '/products/laptops',
  },
  {
    id: 3,
    text: 'fragrances',
    url: '/products/fragrances',
  },
  {
    id: 4,
    text: 'skincare',
    url: '/products/skincare',
  },
  {
    id: 5,
    text: 'groceries',
    url: '/products/groceries',
  },
  {
    id: 6,
    text: 'home-decoration',
    url: '/products/home-decoration',
  },
  {
    id: 7,
    text: 'furniture',
    url: '/products/furniture',
  },
  {
    id: 8,
    text: 'tops',
    url: '/products/tops',
  },
  {
    id: 9,
    text: 'womens-dresses',
    url: '/products/womens-dresses',
  },
  {
    id: 10,
    text: 'womens-shoes',
    url: '/products/womens-shoes',
  },
  {
    id: 11,
    text: 'mens-shirts',
    url: '/products/mens-shirts',
  },
  {
    id: 12,
    text: 'mens-shoes',
    url: '/products/mens-shoes',
  },
  {
    id: 13,
    text: 'mens-watches',
    url: '/products/mens-watches',
  },
  {
    id: 14,
    text: 'womens-watches',
    url: '/products/womens-watches',
  },
  {
    id: 15,
    text: 'womens-bags',
    url: '/products/womens-bags',
  },
  {
    id: 16,
    text: 'womens-jewellery',
    url: '/products/womens-jewellery',
  },
  {
    id: 17,
    text: 'sunglasses',
    url: '/products/sunglasses',
  },
  {
    id: 18,
    text: 'automotive',
    url: '/products/automotive',
  },
  {
    id: 19,
    text: 'motorcycle',
    url: '/products/motorcycle',
  },
  {
    id: 20,
    text: 'lighting',
    url: '/products/lighting',
  },
];

export const ProductSublinksAz = productSublinks.sort((a, b) => {
  return a.text.localeCompare(b.text);
});

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
];

export const products_url = 'https://dummyjson.com/products?limit=100';

export const single_product_url = `https://dummyjson.com/products`;
