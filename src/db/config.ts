import { config } from "dotenv";
import { Dialect, Sequelize } from 'sequelize'
config()

const db = {
  database: process.env.DB as string,
  user: process.env.USER as string,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  driver: process.env.DRIVER as Dialect
}

export const connectionDB = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: db.driver
})

