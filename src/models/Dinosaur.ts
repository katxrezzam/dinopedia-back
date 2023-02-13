import { DataTypes, Model, Optional} from "sequelize";
import { connectionDB } from "../db/config";
import { Diet, Era, Kind } from "../enums";

export interface DinosaurAttributes{
  id: number,
  name: string,
  kind: Kind,
  location: string,
  era: Era,
  diet: Diet,
  url_image: string,
  article_id?: number
}

export interface DinosaurInput extends Optional<DinosaurAttributes, 'id'>{}
export interface DinosaurOutput extends Required<DinosaurAttributes> {}

class Dinosaur extends Model<DinosaurAttributes, DinosaurInput> implements DinosaurAttributes {
  id!: number;
  name!: string;
  kind!: Kind;
  location!: string;
  era!: Era;
  diet!: Diet;
  url_image!: string;
  article_id!: number;
}
Dinosaur.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kind: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  era: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  diet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_image:{
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { sequelize: connectionDB, tableName:'dinosaurs' })

export default Dinosaur
