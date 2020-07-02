import 'dotenv/config';
import db from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = async (user, expiresIn) => {
  // don't encode the whole user because there might be a password on user
  const { id, email, username } = user;
  return await jwt.sign({ id, email, username }, process.env.SECRET, {
    expiresIn,
  });
};

const generatePasswordHash = async password => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const validatePassword = async (passwordHash, attemptedPassword) =>
  await bcrypt.compare(attemptedPassword, passwordHash);

const createUser = async (username, email, password) => {
  const passwordHash = await generatePasswordHash(password);

  const result = await db.fetch(
    `INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)
    RETURNING id, username, email`,
    [username, email, passwordHash]
  );

  return result;
};

const fetchUserByEmail = async email =>
  await db.fetch('SELECT * FROM users WHERE email = $1 LIMIT 1', [email]);

const fetchUserByUsername = async username =>
  await db.fetch('SELECT * FROM users WHERE username = $1 LIMIT 1', [username]);

const fetchUserByLogin = async emailOrUsername => {
  let user = await fetchUserByUsername(emailOrUsername);

  if (!user) {
    user = await fetchUserByEmail(emailOrUsername);
  }

  return user;
};

const fetchUserById = async id =>
  await db.fetch('SELECT * FROM users WHERE id = $1', [id]);

const signUp = async (username, email, password) => {
  const user = await createUser(username, email, password);
  const token = await createToken(user, '30d');

  return { user, token };
};

const signIn = async (login, password) => {
  const user = await fetchUserByLogin(login);

  if (!user) {
    throw new UserInputError('No user found with that login');
  }

  const isPasswordValid = await validatePassword(user.password_hash, password);

  if (!isPasswordValid) {
    throw new AuthenticationError('Invalid password');
  }

  const token = await createToken(user, '30d');

  return {
    user,
    token,
  };
};

export default { signIn, signUp };
