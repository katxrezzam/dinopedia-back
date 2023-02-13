import Dinosaur, {DinosaurInput, DinosaurOutput} from "../models/Dinosaur";

export const findAll = async (): Promise<DinosaurOutput[]> => {
  return await Dinosaur.findAll()
}

export const findById = async (id: number): Promise<DinosaurOutput> => {
  const dinosaur = await Dinosaur.findByPk(id)
  if(!dinosaur) throw new Error('dinosaur not found')
  return dinosaur
}

export const destroy = async (id: number): Promise<boolean> => {
  const deletedDinosaur = await Dinosaur.destroy({ where: { id }})
  return !!deletedDinosaur
}

export const update = async (id: number, payload: Partial<DinosaurInput>): Promise<DinosaurOutput> => {
  const dinosaur = await Dinosaur.findByPk(id)
  if(!dinosaur) throw new Error('dinosaur not found')
  return (dinosaur as Dinosaur).update(payload)
}

export const create = async (dino: DinosaurInput): Promise<DinosaurOutput> => {
  return await Dinosaur.create(dino)
}