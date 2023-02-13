import { Router } from "express";
import { createAsset, deleteAsset, findAllAsset, updateAsset } from "../controllers/assetController";
import { findById, findBySection } from "../services/assetService";

const routerAsset = Router()

routerAsset.route('/')
  .get(findAllAsset)
  .post(createAsset)

routerAsset.route('/:id')
  .get(findById)
  .put(updateAsset)
  .delete(deleteAsset)

routerAsset.route('/section/:id')
  .get(findBySection)

export default routerAsset
