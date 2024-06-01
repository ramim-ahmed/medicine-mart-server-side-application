const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(process.env.PORT, () => {
      console.log("Database connecting succesfully🔥");
      console.log(`Server running on port: http:localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.log(`Internal server error ${error}`);
  }
}

main();
