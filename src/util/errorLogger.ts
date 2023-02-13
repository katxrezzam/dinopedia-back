export const errorMessage = (error: unknown): string => {
  const result = (error as Error).message
  return result
}
