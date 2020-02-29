const transaction = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("transaction", {
    amount: {
      type: DataTypes.FLOAT({
        length: 12, // this means that we will not be able to store 8 digit numbers or larger
        unsigned: false,
        decimals: 4, // extra digits to help prevent rounding errors
        zerofill: false,
      }),
    },
    date: {
      type: DataTypes.DATE,
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Field 'category' on Transaction type must not be empty",
        },
      },
    },
  });

  Transaction.associate = models => {
    Transaction.belongsTo(models.User);
  };

  return Transaction;
};

export default transaction;
