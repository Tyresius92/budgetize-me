PGPASSWORD=postgres psql -U budgetizeadmin -d budgetize_me_db -c "
	DROP TABLE IF EXISTS transactions;
	DROP TABLE IF EXISTS users;

	CREATE TABLE users (
		id SERIAL PRIMARY KEY,
		username VARCHAR (50) UNIQUE NOT NULL,
		email VARCHAR (50) UNIQUE NOT NULL,
		password_hash VARCHAR (60) NOT NULL
	);

	CREATE TABLE transactions (
		id SERIAL PRIMARY KEY,
		user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
		amount FLOAT NOT NULL, 
		created_date TIMESTAMP NOT NULL
	);
"