import ApiError from '../error/ApiError';
import Models from '../models/models';
const {Brand} = Models;
class BrandController {
  async create(req, res, next) {
    let {name} = req.body;

    if (!name) {
      return next(ApiError.internal("Поле name отстутсвует в brand запросе"))
    }
    const brand = await Brand.create({name});
    return res.json(brand);
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

export default new BrandController();
