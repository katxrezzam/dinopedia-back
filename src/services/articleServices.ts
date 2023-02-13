import Article, {ArticleInput, ArticleOutput} from "../models/Article";

export const findAll = async (): Promise<ArticleOutput[]> => {
  return await Article.findAll()
}

export const create = async (article: ArticleInput): Promise<ArticleOutput> => {
  return await Article.create(article)
}

export const destroy = async (id: number): Promise<boolean> => {
  const deletedArticle = await Article.destroy({ where: { id } })
  return !!deletedArticle
}

export const update = async (id: number, payload: Partial<ArticleInput>): Promise<ArticleOutput> => {
  const article = await Article.findByPk(id)
  if(!article){
    throw new Error(`Not found an Article with id: ${id}`)
  }
  return await (article as Article).update(payload)
}

export const findById = async (id: number): Promise<ArticleOutput> => {
  const article = await Article.findByPk(id)
  if(!article){
    throw new Error(`Not found an Article with id: ${id}`)
  }
  return article
}