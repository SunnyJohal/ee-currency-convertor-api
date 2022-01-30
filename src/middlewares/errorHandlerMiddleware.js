export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err.code === 404) {
    return res.status(404).json({
      code: 404,
      status: 'Not Found',
      message: error.message || 'The server can not find the requested resource.',
    });
  }

  if (err.code === 400) {
    return res.status(400).json({
      code: 400,
      status: 'Bad Request',
      message:
        error.message ||
        'The server could not understand the request due to invalid amount or country code information.',
    });
  }

  return res.status(500).json({
    code: 500,
    status: 'InternalServerError',
    message: error.message || 'The server is unable to handle this request.',
  });
};
