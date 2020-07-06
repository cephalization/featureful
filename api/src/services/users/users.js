import { db } from 'src/lib/db'

export const users = async () => await db.user.findMany()

export const getUserByEmail = async (email) =>
  await db.user.findOne({
    where: { email },
  })

export const createUser = async (name, email, profileURL) => {
  return await db.user.create({ data: { name, email, profileURL } })
}
