export default {
  Query: {
    messages: async (parent, args, { models }) => {
      return await models.Message.findAll();
    },
    message: async (parent, { id }, { models }) => {
      return await models.Message.findByPk();
    },
  },
  Mutation: {
    createMessage: async (parent, { text }, { models, me }) => {
      return await models.Message.create({
        text,
        userId: me.id,
      });
    },
    deleteMessage: async (parent, { id }, { models }) => {
      return await models.Message.destroy({
        where: {
          id,
        },
      });
    },
    updateMessage: async (parent, { id, newText }, { models }) => {
      return await models.Message.findByPk(id).then(async oldMessage => {
        const newMessage = {
          ...oldMessage,
          text: newText,
        };

        return await newMessage.save();
      });
    },
  },
  Message: {
    user: async (message, args, { models }) => {
      return await models.User.findByPk(message.userId);
    },
  },
};
