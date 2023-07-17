const express = require("express");
const axios = require("axios");

const app = express();
const port = 5000;

app.use(express.json());

app.post("/billing", async (req, res) => {
  try {
    const { employeeId, address, address2, postal, city, country } = req.body;

    console.log(req.body);

    await axios.post("http://localhost:5001/shipping", req.body);

    res
      .status(200)
      .send("Billing information received and forwarded to shipping service.");
  } catch (error) {
    console.error("Error occurred in billing-service:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Billing service is running on port ${port}`);
});
