// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const getCurrentUser = async ({ email }) => {
//     return await db.user.findOne({ where: { email } })
//   }
import { AuthenticationError } from '@redwoodjs/api'

import { createUser, getUserByEmail } from 'src/services/users/users'

const getUserDetails = (jwt) => ({
  // Assumes github auth token at the moment
  name: jwt?.user_metadata?.full_name,
  profileURL: jwt?.user_metadata?.avatar_url,
  email: jwt?.email,
})

export const getCurrentUser = async (jwt) => {
  const { name, profileURL, email } = getUserDetails(jwt)

  const user =
    (await getUserByEmail(email)) || (await createUser(name, email, profileURL))

  return user
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
