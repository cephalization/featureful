import got from 'got'

import { updateUser } from 'src/services/users/users'

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 404 }
  }

  const body = JSON.parse(event.body) || {}

  if (!body.code || !body.userId) {
    return { statusCode: 400, body: { error: 'Invalid request payload' } }
  }

  const params = [
    ['client_id', process.env.GITHUB_CLIENT_ID],
    ['client_secret', process.env.GITHUB_CLIENT_SECRET],
    ['code', body.code],
  ]
  const githubAccessTokenURI = new URL(
    `https://github.com/login/oauth/access_token`
  )
  params.forEach(([key, value]) =>
    githubAccessTokenURI.searchParams.append(key, value)
  )

  const response = await got(githubAccessTokenURI, {
    headers: {
      accept: 'application/json',
    },
    method: 'POST',
    responseType: 'json',
  })

  if (!response.body.access_token) {
    return {
      statusCode: 400,
      body: response.body,
    }
  }

  await updateUser({
    id: body.userId,
    input: { githubAccessToken: response.body.access_token },
  })

  return {
    statusCode: 200,
    body: { ok: true },
  }
}
