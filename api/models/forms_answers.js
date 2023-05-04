'use strict';
const {
  Model, UniqueConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class forms_answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  forms_answers.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate:{
        is: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
      }
      },
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    create_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'forms_answers',
  });
  return forms_answers;
};