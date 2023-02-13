import { DataTypes, Model, Optional} from "sequelize"
import { connectionDB } from "../db/config"

interface AssestAttributes{
  id: number
  url: string,
  section_id?: number
}

export interface AssestInput extends Optional<AssestAttributes, 'id'> {}
export interface AssestOutput extends Required<AssestAttributes> {}

class Asset extends Model<AssestAttributes, AssestInput> implements AssestAttributes{
  public id!: number
  public url!: string
  public section_id!: number;
}
Asset.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  url:{
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize: connectionDB, tableName: 'assets' })

export default Asset