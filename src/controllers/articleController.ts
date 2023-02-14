import { RequestHandler } from "express"
import { create, destroy, findAll, findById, update } from "../services/articleServices"
import { UpdateArticle } from "../types"
import { errorMessage } from "../util/errorLogger"
import { toNewArticle, toNewUpdateArticle } from "../util/validation/articleValidation"
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

export const createArticle: RequestHandler = async (req, res) => {
  try {
    const newArticle = toNewArticle(req.body)
    const parsedArticle = await create(newArticle)
    res.json(parsedArticle)
  } catch (error) {
    res.sendStatus(400)
    console.error(errorMessage(error))
  }
}

export const updateArticle: RequestHandler = async (req, res) => {
  try {
    const id = numberValidation(+req.params.id)
    const article: UpdateArticle = toNewUpdateArticle(req.body)
    const parsedArticle = await update(id, article)
    res.json(parsedArticle)
  } catch (error) {
    res.sendStatus(400)
    console.error(errorMessage(error))
  }
}

export const deleteArticle: RequestHandler = async (req, res) => {
  try {
    const id = numberValidation(+req.params.id)
    const isDeleted = await destroy(id)
    res.json(isDeleted)
  } catch (error) {
    res.sendStatus(400)
    console.error(errorMessage(error))
  }
}