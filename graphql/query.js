import gql from 'graphql-tag'

export  const categoryQuery = gql`
query categoryQuery{
  categories{
    id
    name
    picture{
      url
    }
  }
}
`
