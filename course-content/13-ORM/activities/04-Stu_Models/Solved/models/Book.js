const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    // Manually define the primary key
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    // https://sequelize.org/docs/v6/core-concepts/model-basics/#enforcing-the-table-name-to-be-equal-to-the-model-name
    freezeTableName: true,
    //Everything returned in snake_case
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;
