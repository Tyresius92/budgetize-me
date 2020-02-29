import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import uuidv4 from "uuid/v4";

import schema from "./schema";
import resolvers from "./resolvers";
import models, { sequelize } from "./models";

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req, res }) => {
    return {
      models,
      me: await models.User.findByLogin("TyrelClayton"),
    };
  },
});

server.applyMiddleware({
  app,
  path: "/graphql",
});

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }

  app.listen({ port: 8000 }, () => {
    console.log("🚀 Apollo Server ready on http://localhost:8000/graphql");
  });
});

const createUsersWithMessages = async () => {
  await models.User.create(
    {
      username: "TyrelClayton",
      email: "hello@goodbye.com",
      password: "thePassword",
      messages: [
        {
          text: "Hello World!",
        },
        {
          text: "bananas are cool",
        },
      ],
      transactions: [
        {
          amount: 123.34,
          category: "Home",
          date: "2011-10-10T14:48:00.000+09:00",
        },
        {
          amount: 100.0,
          category: "Pets",
          date: "2011-10-10T14:48:00.000+09:00",
        },
      ],
    },
    {
      include: [models.Message, models.Transaction],
    }
  );

  await models.User.create(
    {
      username: "ddavids",
      email: "goodbye@goodbye.com",
      password: "otherPassword",
      messages: [
        {
          text: "Happy to release ...",
        },
        {
          text: "Published a complete ...",
        },
      ],
      transactions: [
        {
          amount: 12345.67,
          category: "bananas",
          date: "2011-10-10T14:48:00.000+09:00",
        },
      ],
    },
    {
      include: [models.Message, models.Transaction],
    }
  );
};
