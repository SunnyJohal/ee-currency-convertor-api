import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    hi: 'there',
  });
});

router.get('/convert/:amount/:from/:to', async (req, res) => {
  const { amount, from, to } = req.params;

  res.json({
    from,
    to,
    rate: 7.6777,
    amount: 100.33,
  });
});

// Implement an End Point which can return the exchange rate from Euro to Dollars
// Extend your solution to convert US dollars to British Pounds
// Extend your solution to convert Euro to British Pounds
// Extend your solution to add 13.12 Euro to 99 British Pounds and return 185.64 CAD

export { router };
