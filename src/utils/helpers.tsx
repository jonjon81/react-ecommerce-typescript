export const formatPrice = (number: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

export const discountPercent = (number: number): number => {
  return Math.round(number);
};

export const discountedPrice = (oldprice: number, discount: number): string => {
  let newNumber = oldprice - oldprice * (discountPercent(discount) / 100);
  return formatPrice(newNumber);
};

export const getUniqueValues = (data: any[], type: string): string[] => {
  let unique = data.map((item) => item[type]);
  return ['all', ...new Set(unique)];
};

export const scrollTop = (): void => {
  window.scrollTo(0, 0);
};