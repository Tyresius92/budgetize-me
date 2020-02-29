import uuidv4 from "uuid/v4";

export default {
  Query: {
    transactions: async (parent, args, { models }) => {
      return await models.Transaction.findAll();
    },
    transaction: async (parent, { id }, { models }) => {
      return await models.Transaction.findByPk(id);
    },
  },
  Mutation: {
    createTransaction: async (parent, args, { models, me }) => {
      return await models.Transaction.create({
        id,
        amount: args.amount,
        category: args.category,
        date: args.date,
        userId: context.me.id,
      });
    },
    deleteTransaction: async (parent, { id }, { models }) => {
      return await models.Transaction.destroy({
        where: {
          id,
        },
      });
    },
    updateTransaction: async (
      parent,
      { id, amount, category, date },
      { models }
    ) => {
      return await models.Transaction.findByPk(id).then(
        async oldTransaction => {
          const newTransaction = {
            ...oldTransaction,
            amount,
            category,
            date,
          };

          return await newTransaction.save();
        }
      );
    },
  },
  Transaction: {
    user: async (transaction, args, { models }) => {
      return await models.User.findByPk(transaction.userId);
    },
  },
};
