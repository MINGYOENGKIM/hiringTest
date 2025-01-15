export function useThousandComma(price) {
  if (!price) {
      return price;
  }
  if (price?.toString().indexOf('.') !== -1) {
      price = price.toString().split('.')[0];
  }
  const account = price ? price.toString() : '0';
  account.replace(/,/g, '');
  return account.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
