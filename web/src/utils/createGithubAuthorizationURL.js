const isDevelopment = process.env.NODE_ENV === 'development'
const params = [
  ['client_id', process.env.GITHUB_CLIENT_ID],
  ['scope', 'user repo read:org'],
  ['state', 'unguessablerandomstring'],
  ...(isDevelopment ? [['redirect_uri', process.env.GITHUB_REDIRECT_URI]] : []),
]

export const createGithubAuthorizationURL = () => {
  const url = new URL('https://github.com/login/oauth/authorize')
  params.forEach(([key, value]) => url.searchParams.append(key, value))

  return url
}
