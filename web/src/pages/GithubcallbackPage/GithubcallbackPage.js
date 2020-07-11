import { parse } from 'query-string'
import { useLocation, routes, navigate } from '@redwoodjs/router'
import { useEffect, useState } from 'react'
import { useAuth } from '@redwoodjs/auth'

const getAccessToken = async (code, userId) => {
  const res = await fetch(`/.netlify/functions/githubAccessToken`, {
    method: 'POST',
    body: JSON.stringify({ code, userId }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const body = await res.json()

  if (body && body.ok) {
    navigate(routes.dashboard())
  }
}

const GithubcallbackPage = () => {
  const [fetched, setFetched] = useState(false)
  const { search } = useLocation()
  const { code } = parse(search)
  const {
    currentUser: { id },
  } = useAuth()

  useEffect(() => {
    if (code && id && !fetched) {
      setFetched(true)
      getAccessToken(code, id)
    }
    console.log('will not fetch')
  }, [code, fetched, setFetched, id])

  return null
}

export default GithubcallbackPage
