import { merge } from 'lodash';

import { RootQueryType, RootQueryResolvers } from './QueryType.js';
import { ExampleQueryType, ExampleQueryResolvers } from './ExampleType.js';

export const typeDefs = [RootQueryType, ExampleQueryType];

export const resolvers = merge(RootQueryResolvers, ExampleQueryResolvers);
