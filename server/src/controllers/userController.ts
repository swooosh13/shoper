import {Request, Response} from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import ApiError from "../error/ApiError";
import Models from '../models/models';

const {User, Basket} = Models;

const generateJwt = (id, email, role) => {
  const payload = {id, email, role};
  return jwt.sign(payload, process.env.API_KEY, {expiresIn: '24h'});
};

class UserController {
  async registration(req, res, next) {
    const {email, password} = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или password"));
    }
    const candidate: any = User.findOne({where: {email}});
    if (!candidate) {
      return next(ApiError.badRequest("Пользователь с таким email уже существует"));
    }

    const role = "USER";

    const hashedPassword = await bcrypt.hash(password, 7);

    const user: any = await User.create({email, role, password: hashedPassword});
    const basket: any = await Basket.create({userId: candidate.id});

    const token: any = generateJwt(user.id, user.email, user.role);
    return res.json({token});
  }

  async login(req, res, next) {
    const {email, password} = req.body;
    if (!email || !password) {
      return next(ApiError.internal("Некорректный email или password"));
    }

    const user: any = await User.findOne({where: {email}});

    if (!user) {
      return next(ApiError.internal("Такого пользователя не существует"));
    }

    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Неверный пароль"));
    }

    const token = generateJwt(user.id, user.email, user.role);
    return res.json({token});
  }

  async check(req: Request, res: Response, next) {
    const {id} = req.query;
    if (!id) {
      return next(ApiError.badRequest('не указан id запроса'));
    }
    res.status(200).json({
      message: id
    });
  }
}

export default new UserController();
