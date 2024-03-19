import { mergeTypeDefs } from "@graphql-tools/merge";

// typeDefs
import authTypeDef from "./auth.typeDef.js";
import postTypeDef from "./post.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([authTypeDef, postTypeDef]);

export default mergedTypeDefs;