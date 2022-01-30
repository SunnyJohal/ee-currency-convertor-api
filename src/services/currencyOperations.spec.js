import { addCurrencies, convertCurrency } from './currencyOperations';

describe('Given: Rate Operations Service', () => {
  describe('When: I convert an amount without passing in a relativeTo currency code', () => {
    describe('Then: It should convert that amount relative to USD', () => {
      it('should give the correct amount when I attempt to convert 10 GBP', () => {
        // Formula: (10 / 0.78569) * 1
        const expectedAmount = 12.7276661;
        const amount = convertCurrency({ amount: 10.0, fromCurrencyCode: 'GBP' });

        expect(amount).toBeDefined();
        expect(typeof amount).toBe('number');
        expect(amount).toBeCloseTo(expectedAmount);
      });

      it('should still give me zero when I attempt to convert 0 GBP', () => {
        expect(convertCurrency({ amount: 0, fromCurrencyCode: 'GBP' })).toBe(0);
      });
    });

    describe('When: I convert an amount relativeTo CAD currency code', () => {
      describe('Then: It should convert that amount relative to CAD', () => {
        it('should give the correct amount when I attempt to convert 13.12 EUR to CAD', () => {
          const expectedAmount = 19.68;
          const amount = convertCurrency({
            amount: 13.12,
            fromCurrencyCode: 'EUR',
            toCurrencyCode: 'CAD',
          });

          expect(amount).toBeDefined();
          expect(typeof amount).toBe('number');
          expect(amount).toBeCloseTo(expectedAmount);
        });
      });
    });

    describe('When: I want add 13.12 Euro to 99 British Pounds and return 185.64 CAD', () => {
      describe('Then: It should add them together and return the result in CAD', () => {
        const expectedAmount = 185.64;
        const amount = addCurrencies({
          amount: 13.12,
          currencyCode: 'EUR',
          additionalAmount: 99,
          additionalCurrencyCode: 'GBP',
          convertTo: 'CAD',
        });
        it('should give the correct result back', () => {
          expect(amount).toBeCloseTo(expectedAmount);
        });
      });
    });
  });
});
