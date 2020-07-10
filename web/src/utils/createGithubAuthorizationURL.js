const { GITHUB_CLIENT_ID } = process.env

const params = [
  ['client_id', GITHUB_CLIENT_ID],
  ['scope', 'user repo read:org'],
  ['state', 'unguessablerandomstring'],
]

export const createGithubAuthorizationURL = () => {
  const url = new URL('https://github.com/login/oauth/authorize')
  params.forEach(([key, value]) => url.searchParams.append(key, value))

  return url
}
