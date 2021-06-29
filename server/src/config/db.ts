import {Sequelize} from "sequelize";

export default new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    port: process.env.DB_PORT
  }
);
