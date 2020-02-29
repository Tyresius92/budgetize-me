import { gql } from "apollo-server-express";
import { buildFederatedSchema } from "@apollo/federation";
import customScalarsSchema from "./custom-scalars";
import userSchema from "./user";
import messageSchema from "./message";
import transactionSchema from "./transaction";

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  ...customScalarsSchema,
  userSchema,
  messageSchema,
  transactionSchema,
];
