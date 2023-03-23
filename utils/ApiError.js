/**
  Api handler class
**/

class ApiError extends Error {
   constructor(name, httpCode, description, isOperational) {
       super(description);

       this.name = name;
       this.httpCode = httpCode;
       this.isOperational = isOperational;

       Error.captureStackTrace(this, ApiError);
   }
}

module.exports = ApiError;
