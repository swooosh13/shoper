import ApiError from '../error/ApiError';
import Models from '../models/models';
const {Type} = Models;

class TypeController {
  async create(req, res, next) {
    const {name} = req.body;

    if (!name) {
      return next(ApiError.internal("Поле name отстутсвует в type запросе"));
    }

    const type = await Type.create({name});
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

export default new TypeController();
