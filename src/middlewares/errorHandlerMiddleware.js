export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err.code === 404) {
    return res.status(404).json({
      code: 404,
      status: 'NotFound',
    });
  }

  return res.status(500).json({
    code: 500,
    status: 'InternalServerError',
  });
};
