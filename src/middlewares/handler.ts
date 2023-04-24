
const _responseHandler = (res, statusCode, json) => {
  return res.status(statusCode).json(json);
};

const requestHandler = ({
  controller,
  status = 200,
  bodyAdapter = null,
  responseHandler = _responseHandler,
}) => {
  const _handler = async (req, res, next) => {
    try {
      const body = bodyAdapter !== null ? bodyAdapter(req) : req.body;
      const query = req.query;
      const params = req.params;
      const result = await controller(Object.assign(body, query, params), req.headers);
      const statusCode = result?.status || status;
      responseHandler(res, statusCode, result);
    } catch (error) {
      console.log(error);
      responseHandler(res, 500, { message: 'internal error' });
    } finally {
      next();
    }
  };

  return _handler;
};

export { requestHandler };
