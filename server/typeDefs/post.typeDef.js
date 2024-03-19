

const postTypeDef = `#graphql
  type Post {
    id: ID!,
    title: String!,
    description: String!
  }
  # input type
  input PostInput{
    title: String!,
    description: String!,
  }
  
  # queries
  type Query {
    totalPosts: Int!
    allPosts: [Post!]!
  }

  # mutations
  type Mutation {
    newPost(input: PostInput!): Post!
  }
`;

export default postTypeDef;
