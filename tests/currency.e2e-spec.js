import request from 'supertest';
import app from '../src/app';

describe('Equal experts tests (e2e)', () => {
  describe('Implement an End Point which can return the exchange rate from Euro to Dollars.', () => {
    it('should get the EUR rate relative to USD', async () => {
      const res = await request(app).get('/api/v1/currency/rate/EUR/USD');
      expect(res.body.exchangeRate).toBeCloseTo(1.1387576154415533);
      expect(res.body.from).toBe('EUR');
      expect(res.body.to).toBe('USD');
    });
  });

  describe('Extend your solution to convert US dollars to British Pounds.', () => {
    it('should calculate the correct total for 10.00 USD', async () => {
      const res = await request(app).get('/api/v1/currency/convert/10.00/USD/GBP');
      expect(res.body.total).toBe('7.86');
      expect(res.body.currencyCode).toBe('GBP');
    });
  });

  describe('Extend your solution to convert Euro to British Pounds.', () => {
    it('should calculate the correct total for 10.00 EUR', async () => {
      const res = await request(app).get('/api/v1/currency/convert/10.00/EUR/GBP');
      expect(res.body.total).toBe('8.95');
      expect(res.body.currencyCode).toBe('GBP');
    });
  });

  describe('Extend your solution to add 13.12 Euro to 99 British Pounds and return 185.64 CAD.', () => {
    it('should calculate the correct total in CAD (even when adding differnt currencies together)', async () => {
      const res = await request(app).get('/api/v1/currency/add/13.12/EUR/99/GBP/CAD');
      expect(res.body.total).toBe('185.64');
      expect(res.body.currencyCode).toBe('CAD');
    });
  });
});

describe('Currency Endpoints (e2e)', () => {
  describe('GET api/v1/currency/rates', () => {
    it('should get all rates relative to 1 USD as default', async () => {
      const res = await request(app).get('/api/v1/currency/rates/');
      expect(res.status).toBe(200);
      expect(res.body.USD).toBe(1);
    });
  });

  describe('GET api/v1/currency/rates/EUR', () => {
    it('should get all rates relative to 1 EUR as default', async () => {
      const res = await request(app).get('/api/v1/currency/rates/EUR');
      expect(res.status).toBe(200);
      expect(res.body.EUR).toBe(1);
    });
  });

  describe('GET api/v1/currency/rate/EUR', () => {
    it('should return a object containing the rate relative to USD', async () => {
      const res = await request(app).get('/api/v1/currency/rate/EUR');

      expect(res.status).toBe(200);
      expect(res.body.exchangeRate).toBeCloseTo(1.1387576154415533);
      expect(res.body.from).toBe('EUR');
      expect(res.body.to).toBe('USD');
    });
  });

  describe('GET api/v1/currency/rate/EUR/GBP', () => {
    it('should return a object containing the rate relative to GBP', async () => {
      const res = await request(app).get('/api/v1/currency/rate/EUR/GBP');

      expect(res.status).toBe(200);
      expect(res.body.exchangeRate).toBeCloseTo(0.894710470876274);
      expect(res.body.from).toBe('EUR');
      expect(res.body.to).toBe('GBP');
    });
  });
});
