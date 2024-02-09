export const currencyFormatter = (n: number) =>
  Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD'
  }).format(n)
