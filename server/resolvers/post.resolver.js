import posts from "../temp.js";

const postResolver = {
  Query: {
    totalPosts: () => posts.length,
    allPosts: () => posts,
  },
  Mutation: {
    // newPost: (parents, args) => {
    //   //   console.log(args);
    //   // create a new post object
    //   const post = {
    //     id: posts.length++,
    //     title: args.title,
    //     description: args.description,
    //   };
    //   // posts new post object to posts array
    //   posts.push(post);
    //   return post;
    // },
    // newPost: (parents, { title, description }) => {
    //   // create a new post object
    //   const post = {
    //     id: posts.length++,
    //     title: title,
    //     description: description,
    //   };
    //   console.log('New post:', post);
    //   // posts new post object to posts array
    //   posts.push(post);
    //   return post;
    // },
    // newPost: (parents, args) => {
    //     const { title, description } = args.input;
    //   // create a new post object
    //   const post = {
    //     id: posts.length++,
    //     title: title,
    //     description: description,
    //   };
    //   // posts new post object to posts array
    //   posts.push(post);
    //   return post;
    // },
    // newPost: (parents, args) => {
    //   // create a new post object
    //   const post = {
    //     id: posts.length++,
    //     title: args.input.title,
    //     description: args.input.description,
    //   };
    //   // posts new post object to posts array
    //   posts.push(post);
    //   return post;
    // },
    newPost: (parents, args) => {
      // create a new post object
      const post = {
        id: posts.length++,
        ...args.input,
      };
      // posts new post object to posts array
      posts.push(post);
      return post;
    },
  },
};

export default postResolver;
