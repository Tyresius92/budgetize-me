export default {
  Query: {
    me: (parent, args, context) => {
      if (!context.me) {
        return null;
      }

      return context.models.User.findByPk(context.me.id);
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findByPk(id);
    },
    users: async (parent, args, { models }) => {
      return await models.User.findAll();
    },
  },
  Mutation: {
    signUp: async (parent, { username, email, password }, { models }) => {
      const user = await models.User.create({
        username,
        email,
        password,
      });

      return { token: createToken(user) };
    },
  },
  User: {
    messages: async (user, args, { models }) =>
      await models.Message.findAll({
        where: {
          userId: user.id,
        },
      }),
    transactions: async (user, args, { models }) =>
      await models.Transaction.findAll({
        where: {
          userId: user.id,
        },
      }),
  },
};
