import { parseExchangeRates } from "../services/exchangeService";
import { ExchangeRate } from "../services/models/ExchangeRate";

export const getExchangeRates = async (): Promise<ExchangeRate[]> => {
  const data =
    "22 Feb 2023 #38\nCountry|Currency|Amount|Code|Rate\nAustralia|dollar|1|AUD|15.197\nBrazil|real|1|BRL|4.303\nBulgaria|lev|1|BGN|12.102\nCanada|dollar|1|CAD|16.429\nChina|renminbi|1|CNY|3.227\nDenmark|krone|1|DKK|3.179\nEMU|euro|1|EUR|23.670\nHongkong|dollar|1|HKD|2.834\nHungary|forint|100|HUF|6.192\nIceland|krona|100|ISK|15.340\nIMF|SDR|1|XDR|29.664\nIndia|rupee|100|INR|26.825\nIndonesia|rupiah|1000|IDR|1.463\nIsrael|new shekel|1|ILS|6.093\nJapan|yen|100|JPY|16.528\nMalaysia|ringgit|1|MYR|5.007\nMexico|peso|1|MXN|1.208\nNew Zealand|dollar|1|NZD|13.870\nNorway|krone|1|NOK|2.158\nPhilippines|peso|100|PHP|40.359\nPoland|zloty|1|PLN|4.989\nRomania|leu|1|RON|4.807\nSingapore|dollar|1|SGD|16.608\nSouth Africa|rand|1|ZAR|1.220\nSouth Korea|won|100|KRW|1.707\nSweden|krona|1|SEK|2.149\nSwitzerland|franc|1|CHF|23.981\nThailand|baht|100|THB|64.357\nTurkey|lira|1|TRY|1.178\nUnited Kingdom|pound|1|GBP|26.916\nUSA|dollar|1|USD|22.238";
  return parseExchangeRates(data);
};
