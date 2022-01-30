import { getBaseExchangeRates, getExchangeRate } from './rates';

describe('Given: Rates Service', () => {
  describe('When: I request all of the default base rates.', () => {
    describe('Then: I should get a list of rates (relative to USD) that I can use for currency conversions', () => {
      it('should return an object keyed by the ISO currency code', () => {
        const rates = getBaseExchangeRates();
        expect(rates).toBeDefined();
        expect(Object.keys(rates).length).not.toBe(0);
      });

      it('should ensure that each rate value is a number', () => {
        const rates = getBaseExchangeRates();
        expect(rates).toHaveProperty('USD');
        expect(Object.values(rates).every(amount => typeof amount === 'number')).toBe(true);
      });
    });
  });

  describe('When: I request default base rates relative to specific currency (e.g. GBP)', () => {
    describe('Then: I should get a list of rates (relative to GBP) that I can use for currency conversions', () => {
      it('should return an object keyed by the ISO currency code', () => {
        const rates = getBaseExchangeRates();
        expect(rates).toBeDefined();
        expect(Object.keys(rates).length).not.toBe(0);
      });

      it('should ensure that each rate value is a number', () => {
        const rates = getBaseExchangeRates();
        expect(Object.values(rates).every(amount => typeof amount === 'number')).toBe(true);
      });

      it('should return rates relative to the currency code GBP', () => {
        const rates = getBaseExchangeRates('GBP');

        // Formula: (1 / exchangeRate) * baseCurrencyRate[currency]
        expect(rates.GBP).toBeCloseTo(1);
        expect(rates.USD).toBeCloseTo(1.27276661);
        expect(rates.EUR).toBeCloseTo(1.11768);
      });
    });
  });

  describe('When: I request default base rates relative to an invalid currency', () => {
    describe('Then: I should expect an error', () => {
      it('should throw an error for invalid currency codes', () => {
        expect.assertions(1);

        try {
          getBaseExchangeRates('INVALID');
        } catch (error) {
          expect(error.message).toBe('The currency code does not exist.');
        }
      });
    });
  });

  describe('When: I request a specific valid base rate (e.g. GBP)', () => {
    describe('Then: I should get the base exchange rate for that currency', () => {
      it('should give me the correct rate for GBP', () => {
        const expectedGBPRate = 0.78569;
        expect(getExchangeRate('GBP')).toBe(expectedGBPRate);
      });

      it('should allow iso codes that are in lowercase to work', () => {
        const expectedGBPRate = 0.78569;
        expect(getExchangeRate('gbp')).toBe(expectedGBPRate);
      });
    });
  });

  describe('When: I request a specific invalid base rate', () => {
    describe('Then: I should expect an error', () => {
      it('should throw an error for invalid currency codes', () => {
        expect.assertions(1);

        try {
          getExchangeRate('INVALID');
        } catch (error) {
          expect(error.message).toBe('The currency code does not exist.');
        }
      });
    });
  });
});
