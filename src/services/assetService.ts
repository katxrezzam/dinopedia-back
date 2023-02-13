import Asset, {AssestInput, AssestOutput} from "../models/Asset";

export const findBySection = async (id: number): Promise<AssestOutput[]> => {
  const assets = await Asset.findAll({ where: { section_id: id }})
  if(!assets){
    throw new Error(`Not assets found for this section ${id}`)
  }
  return assets
}

export const findAll = async (): Promise<AssestOutput[]> => {
  return await Asset.findAll()
}

export const findById = async (id: number): Promise<AssestOutput> => {
  const asset = await Asset.findByPk(id)
  if(!asset) throw new Error('asset not found')
  return asset
}

export const create = async ( asset: AssestInput): Promise<AssestOutput> => {
  return await Asset.create(asset)
}

export const destroy = async (id: number): Promise<boolean> => {
  const deletedAsset = await Asset.destroy({ where: { id } })
  return !!deletedAsset
}

export const update = async (id: number, payload: Partial<AssestInput>): Promise<AssestOutput> => {
  const asset = await Asset.findByPk(id)
  if(!asset) throw new Error(`Not found Asset with ID ${id}`)
  return await (asset as Asset).update(payload)
}
