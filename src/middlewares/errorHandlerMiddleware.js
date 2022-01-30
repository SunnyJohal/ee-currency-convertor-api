export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err.code === 404) {
    return res.status(404).json({
      code: 404,
      status: 'Not Found',
      message: err.message || 'The server can not find the requested resource.',
    });
  }

  if (err.code === 400) {
    return res.status(400).json({
      code: 400,
      status: 'Bad Request',
      message:
        err.message ||
        'The server could not understand the request due to invalid amount or currency code information.',
    });
  }

  return res.status(500).json({
    code: 500,
    status: 'InternalServerError',
    message: err.message || 'The server is unable to handle this request.',
  });
};
