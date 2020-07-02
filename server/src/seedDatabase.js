import services from './services';

const { userService } = services;

const { signUp } = userService;

const seedDatabase = async () => {
  try {
    const user1 = await signUp(
      'tyresius92',
      'tyresius92@gmail.com',
      'AwesomePassword'
    );
    const user2 = await signUp(
      'marcGaj',
      'marcGaj@gmail.com',
      'lessAwesomePassword'
    );
    const user3 = await signUp(
      'benjiMorr',
      'benjiMorr@gmail.com',
      'moreAwesomePassword'
    );
    const user4 = await signUp('tyrel', 'tyrel@gmail.com', 'ButtsMcGee');

    console.log(user1, user2, user3, user4);

    console.log('seeding database complete');
  } catch (err) {
    console.log('seeding database failed');
    console.log(err);
  }
};

export default seedDatabase;
