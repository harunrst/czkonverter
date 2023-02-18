import { Currency } from "./Currency";

export interface ExchangeRate {
  currency: Currency;
  value: number;
}
