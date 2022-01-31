import { Router } from 'express';
import { getBaseExchangeRates, getExchangeRate } from '../services/rates';
import { addCurrencies, convertCurrency } from '../services/currencyOperations';

const router = Router();

/**
 * Rate information endpoints.
 */
router.get('/rates/:forCurrencyCode?', (req, res) => {
  res.json(getBaseExchangeRates(req.params.forCurrencyCode));
});

router.get('/rate/:from/:to?', (req, res) => {
  const { from, to = 'USD' } = req.params;

  res.json({ exchangeRate: getBaseExchangeRates(from)[to], from, to });
});

/**
 * Currency conversion endpoints.
 */

router.get('/convert/:amount/:from/:to?', (req, res) => {
  const { amount, from, to } = req.params;
  const total = convertCurrency({
    amount,
    fromCurrencyCode: from,
    toCurrencyCode: to,
  });

  res.json({
    total: total.toFixed(2),
    currencyCode: to || 'USD',
  });
});

/**
 * Currency addition endpoints.
 */
router.get(
  '/add/:amount/:currencyCode/:additionalAmount/:additionalCurrencyCode/:convertTo?',
  (req, res) => {
    const { amount, currencyCode, additionalAmount, additionalCurrencyCode, convertTo } =
      req.params;

    const total = addCurrencies({
      amount,
      currencyCode,
      additionalAmount,
      additionalCurrencyCode,
      convertTo,
    });

    return res.json({
      total: total.toFixed(2),
      currencyCode: convertTo || 'USD',
    });
  },
);

export { router };
