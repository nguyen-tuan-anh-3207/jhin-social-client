import { GraphQLClient, gql } from 'graphql-request'
import { API_URL } from 'constants/environment'
import { getCookie } from 'utils/cookie'
import { AUTH_TOKEN } from 'constants/string'

export const graphqlBaseQuery = async (
  url = '/',
  { body }: { body: string }
) => {
  const headers: any = {}

  let token = getCookie(AUTH_TOKEN)
  if (token) {
    headers.authorization = `Bearer ${token}`
  }

  const apiUrl = `${API_URL}${url ?? ''}`
  const client = new GraphQLClient(apiUrl, {
    headers
  })

  const { data, status } = await client.rawRequest(
    gql`
      ${body}
    `
  )

  if (status === 200) {
    return data
  }
}
