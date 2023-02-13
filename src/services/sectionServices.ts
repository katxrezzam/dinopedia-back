import Section, {SectionInput, SectionOutput} from "../models/Section";

export const findByArticle = async (id: number): Promise<SectionOutput[]> => {
  /**
   *  A function it returns all sections associated with an article, otherwise it throws an error if it doesn't find any result
   *  @param {number} id - The article's id associated to its section
   *  @return {Promise<SectionOutput[]>} The collection of sections filter by Article
   */
  const sections = await Section.findAll({ where: { article_id: id } })
  if(!sections) throw new Error('No section found for this article')
  return sections
}

export const findAll = async (): Promise<SectionOutput[]> => {
  return await Section.findAll()
}

export const findById = async (id: number): Promise<SectionOutput> => {
  const section = await Section.findByPk(id)
  if(!section) throw new Error('No section found')
  return  section
}

export const create = async (section: SectionInput): Promise<SectionOutput> => {
  return await Section.create(section)
}

export const update = async (id: number, payload: Partial<SectionInput>): Promise<SectionOutput> => {
  const section = await Section.findByPk(id)
  if(!section) throw new Error('No section found')
  return (section as Section).update(payload)
}

export const destroy = async (id: number): Promise<boolean> => {
  const deletedSection = await Section.destroy({ where: { id } })
  return !!deletedSection
}
