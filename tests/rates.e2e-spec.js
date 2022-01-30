import request from 'supertest';
import app from '../src/app';

describe('Rates (e2e)', () => {
  describe('/currency-covertor', () => {
    it('should do xyz', async () => {
      await request(app).get('/').expect(200);
      expect('this').toBe('this');
    });
  });

  describe('/rates', () => {
    it('should do xyz', async () => {
      await request(app).get('/').expect(200);
      expect('this').toBe('this');
    });
  });
});
