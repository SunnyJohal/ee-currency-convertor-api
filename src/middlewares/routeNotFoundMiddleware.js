export const routeNotFoundMiddleware = (req, res, next) => {
  next({ code: 404, message: 'Route not found' });
};
