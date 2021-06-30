export function centsToDollars(amount: number) {
  return `$${parseFloat(String(amount / 100)).toFixed(2)}`;
}
