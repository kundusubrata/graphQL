

const postTypeDef = `#graphql
  type Post {
    id: ID!,
    title: String!,
    description: String!
  }
  type Query {
    totalPosts: Int!
    allPosts: [Post!]!
  }
  # input type
  input PostInput{
    title: String!,
    description: String!,
  }
  # mutations
  type Mutation {
    newPost(input: PostInput!): Post!
  }
`;

export default postTypeDef;
