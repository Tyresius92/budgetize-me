import { createUser } from './services/user';
import transactionService from './services/transaction';

const { createTransaction } = transactionService;

const seedDatabase = async () => {
  try {
    const user1 = await createUser(
      'tyresius92',
      'tyresius92@gmail.com',
      'AwesomePassword'
    );
    const user2 = await createUser(
      'marcGaj',
      'marcGaj@gmail.com',
      'lessAwesomePassword'
    );
    const user3 = await createUser(
      'benjiMorr',
      'benjiMorr@gmail.com',
      'moreAwesomePassword'
    );
    const user4 = await createUser('tyrel', 'tyrel@gmail.com', 'ButtsMcGee');

    console.log(user1, user2, user3, user4);

    const transaction1 = await createTransaction(1.23, user1.id);
    const transaction2 = await createTransaction(123.45, user2.id);
    const transaction3 = await createTransaction(32.09, user3.id);
    const transaction4 = await createTransaction(4, user3.id);
    const transaction5 = await createTransaction(76.4, user1.id);
    const transaction6 = await createTransaction(13.4, user4.id);
    const transaction7 = await createTransaction(-19.18, user1.id);
    const transaction8 = await createTransaction(9.87, user2.id);
    const transaction9 = await createTransaction(-13.13, user2.id);
    const transaction10 = await createTransaction(-123.71, user3.id);
    const transaction11 = await createTransaction(323.33, user1.id);
    const transaction12 = await createTransaction(69.69, user4.id);

    console.log(
      transaction1,
      transaction2,
      transaction3,
      transaction4,
      transaction5,
      transaction6,
      transaction7,
      transaction8,
      transaction9,
      transaction10,
      transaction11,
      transaction12
    );

    console.log('seeding database complete');
  } catch (err) {
    console.log('seeding database failed');
    console.log(err);
  }
};

export default seedDatabase;
