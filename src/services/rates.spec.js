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

        expect(rates.USD).toBeCloseTo(0.78569);
        expect(rates.EUR).toBeCloseTo(0.894710470876274);
        expect(rates.GBP).toBeCloseTo(1);
        expect(rates.CAD).toBeCloseTo(0.5965076111300914);
        expect(rates.INR).toBeCloseTo(0.011329474601004771);
        expect(rates.MXN).toBeCloseTo(0.040854115102227584);
        expect(rates.AUD).toBeCloseTo(0.5473894686973121);
        expect(rates.CNY).toBeCloseTo(0.11416743316898943);
        expect(rates.MYR).toBeCloseTo(0.18987880179320177);
        expect(rates.COP).toBeCloseTo(0.0002452843736536817);
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
