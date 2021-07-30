import {v4 as uuidv4} from 'uuid';
import path from 'path';
import Models from '../models/models';

import ApiError from "../error/ApiError";

const {Item, ItemInfo} = Models;

class ItemController {
  async create(req, res, next) {
    try {
      let {name, price, brandId, typeId, info, img} = req.body;

      const item = await Item.create({name, price, brandId, typeId, img});

      if (info) {
        info = JSON.parse(info);

        info.forEach(x => ItemInfo.create({
          title: x.title,
          description: x.description,
          // @ts-ignore
          itemId: item.id
        }));
      }

      return res.json(item);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let {brandId, typeId, limit, page} = req.query;

    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;

    let items;
    if (!brandId && !typeId) {
      items = await Item.findAndCountAll({limit, offset});
    }

    // only for brandId query
    if (brandId && !typeId) {
      items = await Item.findAndCountAll({where: {brandId}, limit, offset});
    }
    // only for typeId query
    if (!brandId && typeId) {
      items = await Item.findAndCountAll({where: {typeId}, limit, offset});
    }

    // both query
    if (brandId && typeId) {
      items = await Item.findAndCountAll({where: {brandId, typeId}, limit, offset});
    }

    return res.json(items);
  }

  async getOne(req, res) {
    const {id} = req.params;
    const item = await Item.findOne(
      {
        where: {id},
        include: [{model: ItemInfo, as: 'info'}]
      });
    return res.json(item);
  }
}

export default new ItemController();
