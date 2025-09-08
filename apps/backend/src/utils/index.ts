/**
 * Sleep the function for a given amount of time in ms.
 * @param ms Duration of the sleep.
 */
export async function sleep(ms = 1000): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms))
}
