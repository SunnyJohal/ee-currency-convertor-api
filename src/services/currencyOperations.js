import { getBaseExchangeRates } from './rates';

export const convertCurrency = ({ amount, fromCurrencyCode, toCurrencyCode = 'USD' }) => {
  const rates = getBaseExchangeRates();
  return (amount / rates[fromCurrencyCode]) * rates[toCurrencyCode];
};

export const addCurrencies = ({
  amount,
  currencyCode,
  additionalAmount,
  additionalCurrencyCode,
  convertTo,
}) => {
  return (
    convertCurrency({
      amount,
      fromCurrencyCode: currencyCode,
      toCurrencyCode: convertTo,
    }) +
    convertCurrency({
      amount: additionalAmount,
      fromCurrencyCode: additionalCurrencyCode,
      toCurrencyCode: convertTo,
    })
  );
};
