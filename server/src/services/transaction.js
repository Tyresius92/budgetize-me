import db from '../db';

const createTransaction = async (transactionAmount, userId) => {
  const newTransaction = await db.fetch(
    `INSERT INTO transactions (amount, user_id, created_date)
    VALUES ($1, $2, NOW())
    RETURNING id, user_id, amount, created_date
    `,
    [transactionAmount, userId]
  );

  return {
    id: newTransaction.id,
    userId: newTransaction.user_id,
    amount: newTransaction.amount,
  };
};

const deleteTransaction = async (transactionId, loggedInUserId) => {
  const transactionData = await db.fetch(
    'SELECT user_id FROM transactions WHERE id = $1',
    [transactionId]
  );

  if (transactionData.user_id !== loggedInUserId) {
    // user doesn't own the transaction, maybe throw an error instead?
    return {
      isDeleteSuccessful: false,
    };
  }

  await db.fetch('DELETE FROM transactions WHERE id = $1 RETURNING *', [
    transactionId,
  ]);

  // should probably put in a better check of some kind here
  return {
    isDeleteSuccessful: true,
  };
};

export default { createTransaction, deleteTransaction };
