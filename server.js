const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/v1/transactions", require("./routes/transactionsRouter"));

app.listen(5000, () => console.log("The app is running on port 5000"));
