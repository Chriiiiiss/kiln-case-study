export const formatPrice = (
  price: number,
  currency: string = 'USD'
): string => {
  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: currency,
  }).format(price);
};

export const formatNumber = (
  number: number,
  maximumFractionDigits: number = 2
): string => {
  return new Intl.NumberFormat('en-EN', {
    maximumFractionDigits: maximumFractionDigits,
  }).format(number);
};