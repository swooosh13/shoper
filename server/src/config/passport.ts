import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';
import Models from '../models/models';
import ApiError from "../error/ApiError";

const {User} = Models;

const configPassport = (passport) => {
  let opts: any = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.API_KEY;

  passport.use(new JwtStrategy(opts, async (jwt_payload, next) => {
    const candidate = User.findOne({where: {email: jwt_payload.email}});
    if (candidate) {
      next(null, candidate);
    } else {
      next(ApiError.badRequest("Пользователь не авторизован"));
    }
  }));
};

export default configPassport;

