import { CreateAsset, UpdateAsset } from "../../types";
import { numberValidation, stringValidation } from "./_validation";

export const toNewAsset = (object: any): CreateAsset => {
  const newAsset: CreateAsset = {
    url: stringValidation(object.url),
    section_id: numberValidation(object.section_id)
  }
  return newAsset
}

export const toNewUpdateAsset = (object: any): UpdateAsset => {
  const asset: UpdateAsset = object
  if(asset.url) asset.url = stringValidation(object.url)
  if(asset.section_id) asset.section_id = numberValidation(object.section_id)
  return asset
}