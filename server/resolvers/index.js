

import { mergeResolvers } from "@graphql-tools/merge";

// resolvers
import authResolver from "./auth.resolver.js";
import postResolver from "./post.resolver.js";

const mergedResolvers  = mergeResolvers([authResolver, postResolver]);

export default mergedResolvers;