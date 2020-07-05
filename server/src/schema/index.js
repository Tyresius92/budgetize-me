import { merge } from 'lodash';

// Root types
import { RootQueryType, RootQueryResolvers } from './QueryType.js';
import { RootMutationType, RootMutationResolvers } from './MutationType';
import { CustomScalars, CustomScalarsResolvers } from './CustomScalars';

// User Types
import { UserType, UserResolvers } from './UserType';
import { NewUserInputType } from './NewUserInputType';
import { UserLoginInputType } from './UserLoginInputType';
import { UserLoginPayloadType } from './UserLoginPayloadType';

// Transaction Types
import { TransactionType, TransactionResolvers } from './TransactionType';
import { NewTransactionInputType } from './NewTransactionInputType';
import { DeleteTransactionInputType } from './DeleteTransactionInputType';
import { DeleteTransactionPayloadType } from './DeleteTransactionPayloadType';

export const typeDefs = [
  // Root
  RootQueryType,
  RootMutationType,
  CustomScalars,

  // User
  UserType,
  NewUserInputType,
  UserLoginInputType,
  UserLoginPayloadType,

  // Transaction
  TransactionType,
  NewTransactionInputType,
  DeleteTransactionInputType,
  DeleteTransactionPayloadType,
];

export const resolvers = merge(
  // Root
  RootQueryResolvers,
  RootMutationResolvers,
  CustomScalarsResolvers,

  // User
  UserResolvers,

  // Transaction
  TransactionResolvers
);
