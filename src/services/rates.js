import { rates } from '../constants/rates';

/**
 * Get All Base Exchange Rates
 *
 * @param {string} currencyCode ISO currency code (default USD)
 * @returns {object} Keyed by iso currency code relative
 *   to the currencyCode param.
 */
export const getBaseExchangeRates = (currencyCode = 'USD') => {
  const exchangeRate = getExchangeRate(currencyCode);

  return Object.keys(rates).reduce((allRates, code) => {
    const rate = (1 / rates[code]) * exchangeRate;
    return { ...allRates, [code]: rate };
  }, {});
};

/**
 * Get Exchange Rate
 *
 * @param {string} currencyCode 3 letter ISO country code.
 * @returns {number} The base exchange rate relative to the US Dollar.
 */
export const getExchangeRate = (currencyCode = 'USD') => {
  const rate = rates[currencyCode.toUpperCase()];

  if (!rate) {
    throw new Error('The currency code does not exist.');
  }

  return rate;
};
