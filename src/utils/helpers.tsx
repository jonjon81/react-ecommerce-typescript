export const formatPrice = (number:number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

export const discountPercent = (number:number) => {
  return Math.round(number);
};

export const discountedPrice = (oldprice:number, discount:number) => {
  let newNumber = oldprice - oldprice * (discountPercent(discount) / 100);
  return formatPrice(newNumber);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  return ['all', ...new Set(unique)];
};

export const scrollTop = () => {
  window.scrollTo(0, 0);
};
