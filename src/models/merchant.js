const Pool = require("pg").Pool;

const pool = new Pool({
  user: "my_user",
  host: "localhost",
  database: "my_database",
  password: "root",
  port: 5432,
});

const getMerchants = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      'SELECT * FROM personal_wallet ORDER BY user_id ASC',
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows);
      }
    );
  });
};

const createMerchant = (body) => {
  return new Promise(function (resolve, reject) {
    const { name, phone } = body;

    pool.query(
      "INSERT INTO personal_wallet (username, phone) VALUES ($1, $2) RETURNING *",
      [name, phone],
      (error, results) => {
        if (error) reject(error);
        if (results)
          resolve(`A new merchant has been added added: ${results.rows[0]}`);
      }
    );
  });
};

const deleteMerchant = (id) => {
  return new Promise(function (resolve, reject) {
    // const id = parseInt(request.params.id);

    pool.query(
      `DELETE FROM personal_wallet WHERE user_id = $1`,
      [id],
      (error, results) => {
        if (error) reject(error);
        resolve(`Merchant deleted with ID: ${id}`);
      }
    );
  });
};

module.exports = {
  getMerchants,
  createMerchant,
  deleteMerchant,
};
