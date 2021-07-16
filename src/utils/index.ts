import { DateTime } from "luxon";

export function centsToDollars(amount: number): string {
  return `$${parseFloat(String(amount / 100)).toFixed(2)}`;
}

export const getToday = (): DateTime => {
  return DateTime.now();
}

export const fromISO = (date: string): DateTime => {
  return DateTime.fromISO(date)
}
