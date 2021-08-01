import Models from "../models/models";

import ApiError from "../error/ApiError";

const { Item, ItemInfo } = Models;
class ItemControllerCreate {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info, img } = req.body;

      const item = await Item.create({ name, price, brandId, typeId, img });

      if (info) {
        info = JSON.parse(info);

        const itemInfo = await ItemInfo.create({
          title: info.title,
          description: info.description,
          // @ts-ignore
          itemId: item.id,
        });
      }

      return res.json(item);
    } catch (e) {
      console.log(e);
      next(ApiError.badRequest(e.message));
    }
  }
}

class ItemControllerWithGetters extends ItemControllerCreate {
  async getOne(req, res) {
    const { id } = req.params;
    const item = await Item.findOne({
      where: { id },
      include: [{ model: ItemInfo, as: "info" }],
    });
    return res.json(item);
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;

    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;

    let items;
    if (!brandId && !typeId) {
      items = await Item.findAndCountAll({ limit, offset });
    }

    // only for brandId query
    if (brandId && !typeId) {
      items = await Item.findAndCountAll({ where: { brandId }, limit, offset });
    }
    // only for typeId query
    if (!brandId && typeId) {
      items = await Item.findAndCountAll({ where: { typeId }, limit, offset });
    }

    // both query
    if (brandId && typeId) {
      items = await Item.findAndCountAll({
        where: { brandId, typeId },
        limit,
        offset,
      });
    }

    let respData = JSON.parse(JSON.stringify(items));
    respData.rows.forEach((el) => {
      el.img = el.img[0].split(",");
    });
    console.log(page);
    return res.json({ respData, page: page, limit: limit });
  }
}

class ItemControllerWithInfo extends ItemControllerWithGetters{
  async getItemInfo(req, res) {
    const { id } = req.query;

    const itemInfo = await ItemInfo.findAll({ where: id });
    return res.json(itemInfo);
  }

  async setItemInfo(req, res) {
    const { title, description, id } = req.body;
    const itemInfo = await ItemInfo.create({
      title,
      description,
      // @ts-ignore
      itemId: id,
    });
    return res.json(itemInfo);
  }
}

export default (new ItemControllerWithInfo ());
