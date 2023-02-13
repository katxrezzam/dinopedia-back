import { errorMessage } from "../util/errorLogger"
import { connectionDB } from "./config"

export const initDB = async () => {
  try {
    await connectionDB.authenticate()
    await connectionDB.sync()
  } catch (error) {
    console.error(errorMessage(error))
  }
}