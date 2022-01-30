import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.status(200).send({
    uptime: process.uptime(),
    message: 'OK',
    date: new Date(),
  });
});

export { router };
