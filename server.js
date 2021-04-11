const express = require("express");
const app = express();
const port = 3001;

const merchant_model = require("./src/models/merchant");

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/", (req, res) => {
  merchant_model
    .getMerchants()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/merchants", (req, res) => {
  merchant_model
    .createMerchant(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete("/merchant/:id", (req, res) => {
  merchant_model
    .deleteMerchant(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "my_user",
  host: "localhost",
  database: "my_database",
  password: "root",
  port: 5432,
});

app.get("/balance?user_id=Usr1", (req, res) => {
  // Pass the user_id as a params from the frontend via axios request
  console.log("HELLO");
  res.send({ balance: 10 });
});

app.get("/transactions", (req, res) => {
  // Pass the user_id as a params from the frontend via axios request

  pool.query("SELECT * FROM transactions", (error, results) => {
    console.log(results.rows);
    res.send(results.rows);
  });
});

app.put("/addFunds", (req, res) => {
  console.log("Add funds");
  console.log(req.body.userId);
  console.log(req.body.amount);

  // Add the amount and user_id info in the transactions table
  // pool.query(
  //   `INSERT INTO transactions VALUES ("${req.body.user_id}", "${req.body.amount}")`
  // );
  // pool.query(
  //   `INSERT INTO personal_wallet VALUES ("${}", "${req.body.amount}") WHERE user_id = req.body.user_id`
  // );
  // Update the balance for the selected user in the personal_wallet table
  res.send("Adding fund");
});

app.put("/spendFunds", (req, res) => {
  console.log("Spend Funds");
  console.log(req.body.userId);
  console.log(req.body.amount);
  // Deduct the amount and add user_id info in the transactions table
  // Update the balance for the two users in the personal_wallet table
  res.send("Spending fund");
});

app.listen(port, () => {
  console.log(`App running on the port ${port}.`);
});
