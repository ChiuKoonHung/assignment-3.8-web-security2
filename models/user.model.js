const { Model, DataTypes } = require("sequelize"); // node_modules

module.exports = function (connection) {
  // sequelize is passed as argument

  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pwd: {
        type: DataTypes.STRING,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize: connection,
      modelName: "User",
    }
  );

  return User;
};
