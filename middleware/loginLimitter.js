const rateLimit = require('express-rate-limit');
const { logEvents } = require('./logger');

const loginLimitter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each Ip to 5 login requests per `window` per minute
  message: {
    message:
      'Too many login attempts from this IP, please try again after a 60 second pause',
  },
  handler: (req, res, next, options) => {
    logEvents(
      `Too many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.header.origin}`,
      'errorLog.log'
    );
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true, // REturn rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `x-RateLimit-*` headers
});

module.exports = loginLimitter;
