import { Diet, Era, Kind } from "./enums";

//Dinosaur
export interface CreateDinasaur {
 name: string,
 kind: Kind,
 era: Era,
 location: string,
 diet: Diet,
 url_image: string,
 article_id: number
}
export interface UpdateDinosaur extends Partial<CreateDinasaur> {}

//Article
export interface CreateArticle {
  title: string
}
export interface UpdateArticle extends Partial<CreateArticle> {}

//Section
export interface CreateSection {
  title: string
  content: string
  article_id: number
}
export interface UpdateSection extends Partial<CreateSection>{}

//Asset
export interface CreateAsset {
  url: string
  section_id: number
}
export interface UpdateAsset extends Partial<CreateAsset>{}