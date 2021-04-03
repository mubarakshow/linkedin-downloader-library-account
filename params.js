require("dotenv").config();

const securedParams = {
  user: process.env.LIBRARY_ID,
  password: process.env.LIBRARY_PASSWORD,
  items: [
    "postgresql-essential-training", // add the courses you want to download here
  ],
  outputFolder: "./courses",
};

module.exports = securedParams;
