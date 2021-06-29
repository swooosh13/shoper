import ApiError from "../error/ApiError";

function middleware (err, req, res, next) {

  // TODO
  // instanceof ApiError
   if (err instanceof ApiError || Error) {
     return res.status(err.status).json({message: err.message});
   }

   return res.status(500).json({
     message: "Unexpected error"
   });
}

export default middleware;
