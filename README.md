# personal-wallet-app
Build a basic personal wallet application using Express and PostgreSQL DB (for backend APIs) and ReactJS (for frontend UI). A user has a personal wallet (like in PhonePe for example) which he can use to store cash, spend cash and get cashbacks.

Getting started after cloning the repo -  
1. `npm start`  
2. `sudo -i -u postgres` then `psql`
3. `\l` to list the databases
4. Switch to the database you wanna use - `\c my_database`
5. List the tables - `\dt`
6. List down the entries from a table - `SELECT * FROM personal_wallet;`
7. Add dummy entry - `INSERT INTO personal_wallet (user_id, username, phone, balance) VALUES(1, 'adarsh', 123456, 100);`
8. Open a new terminal - `node server.js` or `yarn run server` if using yarn.

To connect the app with the backend, do a `node server.js` It will create all the RESTful route related endpoints.

Some configurations in the PostgreSQL - 
1. List all users - `\du`
2. `CREATE ROLE my_user WITH LOGIN PASSWORD 'root';`
3. `ALTER ROLE my_user CREATEDB;`   

To login as a certain user to a certain database:
`psql -U testuser testdb`

HINTS - Superuser should never be used. [References](https://stackoverflow.com/a/44904040)

Run the following inside psql shell () -
1. To add auto increment in postgres use SERIAL:
- `ALTER TABLE personal_wallet ADD COLUMN user_id SERIAL PRIMARY KEY;`

2. Add unique constraint to the balance column of the `personal_wallet` table:
- `ALTER TABLE personal_wallet ADD CONSTRAINT unique_balance UNIQUE(balance);`

Create transactions table - 
1. `CREATE TYPE transaction_type AS ENUM ('add_funds', 'spend_funds');`
2. `CREATE TABLE transactions (user_id INTEGER, transaction_type transaction_type, trans_date TIMESTAMP, initial_balance INTEGER, amount INTEGER, final_balance INTEGER, remarks VARCHAR(30), FOREIGN KEY (user_id) REFERENCES personal_wallet(user_id), FOREIGN KEY (final_balance) REFERENCES personal_wallet(balance));`

SAMPLE ENTRY - 
`INSERT INTO transactions VALUES (1, 'add_funds', CURRENT_TIMESTAMP, 200, 100, 100, 'Hello world');`

Tips - 
- If you are stuck in the Peer authentication error, follow [this](https://itsfoss.com/install-postgresql-ubuntu/) article.  

Ending - 
Use the ready-to-use Tailwind CSS blocks on a particular route to generate awesome pages.  
Take care of the responsiveness and depict every key behavior or component in a simple way.  
Hands-on of a crash course done with Harry.
