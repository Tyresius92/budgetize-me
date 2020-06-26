import { merge } from 'lodash';

import { RootQueryType, RootQueryResolvers } from './QueryType.js';
import { RootMutationType, RootMutationResolvers } from './MutationType';
import { CustomScalars, CustomScalarsResolvers } from './CustomScalars';
import { UserType, UserResolvers } from './UserType';
import { NewUserInputType } from './NewUserInputType';
import { UserLoginInputType } from './UserLoginInputType';
import { UserLoginPayloadType } from './UserLoginPayloadType';
import { TransactionType } from './TransactionType';

export const typeDefs = [
  RootQueryType,
  RootMutationType,
  CustomScalars,
  UserType,
  NewUserInputType,
  UserLoginInputType,
  UserLoginPayloadType,
  TransactionType,
];

export const resolvers = merge(
  RootQueryResolvers,
  RootMutationResolvers,
  CustomScalarsResolvers,
  UserResolvers
);
