import got from 'got'

const { GITHUB_CLIENT_ID } = process.env

export const handler = async (event, context) => {
  const res = await got.get('https://github.com/login/oauth/authorize', {
    searchParams: {
      client_id: GITHUB_CLIENT_ID,
      scope: 'user repo read:org',
      // redirect_uri: 'http://localhost:8910/auth/github/callback',
      state: 'unguessablerandomstring',
    },
    followRedirect: false,
  })

  return {
    statusCode: res.statusCode,
    headers: { ...res.headers },
  }
}
