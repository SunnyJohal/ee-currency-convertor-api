import { rates } from './rates';

describe('Rate Data', () => {
  describe('Rate data structure', () => {
    it('should contain the required country codes', () => {
      const countryCodes = ['EUR', 'GBP', 'CAD', 'INR', 'MXN', 'AUD', 'CNY', 'MYR', 'COP'];

      for (let code of countryCodes) {
        expect(rates.hasOwnProperty(code)).toBe(true);
      }
    });
  });
});
