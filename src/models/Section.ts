import { DataTypes, Model, Optional } from "sequelize"
import { connectionDB } from "../db/config"

export interface SectionAttributes{
  id: number
  title: string
  content: string
  article_id?: number
}
export interface SectionInput extends Optional<SectionAttributes, 'id'>{}
export interface SectionOutput extends Required<SectionAttributes> {}

class Section extends Model implements SectionAttributes{
  id!: number
  title!: string
  content!: string
  article_id!: number
}
Section.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  content:{
    type: DataTypes.TEXT
  }
}, {sequelize: connectionDB, tableName: 'sections'})

export default Section