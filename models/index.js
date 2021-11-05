const { Sequelize } = require("sequelize"); // node_modules
const connection = new Sequelize("sqlite::memory:"); // sequelize instance
const User = require("./user.model")(connection); // Importing user.model.js

(async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
    await connection.sync({ force: true });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();



module.exports = {
  User,
};
