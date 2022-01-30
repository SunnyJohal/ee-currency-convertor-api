import app from './app';

const PORT = process.env.PORT || 3001;

const service = app.listen(PORT, () => {
  console.log(`Currency conversion service started on port: ${PORT}`);
});

process.on('SIGTERM', () => {
  service.close(() => {
    console.log('Currency conversion service terminated.');
  });
});
