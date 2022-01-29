import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    currency: 'test-change',
  });
});

// Implement an End Point which can return the exchange rate from Euro to Dollars
// Extend your solution to convert US dollars to British Pounds
// Extend your solution to convert Euro to British Pounds
// Extend your solution to add 13.12 Euro to 99 British Pounds and return 185.64 CAD

export { router };
