import { RequestHandler } from "express"
import { findAll, findById } from "../services/articleServices"
import { errorMessage } from "../util/errorLogger"
import { numberValidation } from "../util/validation/_validation"

export const findAllArticle: RequestHandler = async (_req, res) => {
  try {
    const article = await findAll()
    res.json(article)
  } catch (error) {
    res.sendStatus(400)
    console.error(errorMessage(error))
  }
}

export const findArticleById: RequestHandler = async (req, res) => {
  try{
    const id = numberValidation(+req.params.id)
    const article = await findById(id)
    res.json(article)
  } catch(error) {
    res.sendStatus(400)
    console.error(errorMessage(error))
  }
}