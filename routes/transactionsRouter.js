const express = require("express");
const router = express.Router();
const Transaction = require("../database/models").Transaction;

//Get all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//Add Transaction
router.post("/", async (req, res) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    res.status(201).json(newTransaction);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating transaction" });
  }
});

//Delete a Transaction
router.delete("/:id", async (req, res) => {
  try {
    await Transaction.destroy({ where: { id: req.params.id } });
    res.status(201).json({ message: "Transaction Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
