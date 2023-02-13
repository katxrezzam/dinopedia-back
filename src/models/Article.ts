import { DataTypes, Model, Optional } from "sequelize";
import { connectionDB } from "../db/config";

export interface ArticleAttributes{
  id: number
  title: string
}
export interface ArticleInput extends Optional<ArticleAttributes, 'id'> {}
export interface ArticleOutput extends Required<ArticleAttributes>{}

class Article extends Model<ArticleAttributes, ArticleInput> implements ArticleAttributes{
  id!: number;
  title!: string;
}

Article.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { sequelize: connectionDB, tableName: 'articles' })

export default Article