import { rates } from './rates';

describe('Rate Data', () => {
  describe('Rate data structure', () => {
    it('should contain the required currency codes', () => {
      const currencyCodes = ['EUR', 'GBP', 'CAD', 'INR', 'MXN', 'AUD', 'CNY', 'MYR', 'COP'];

      for (let code of currencyCodes) {
        expect(rates.hasOwnProperty(code)).toBe(true);
      }
    });
  });
});
