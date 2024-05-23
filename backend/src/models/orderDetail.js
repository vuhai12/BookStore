'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderDetail.belongsTo(models.Order, { foreignKey: 'orderId' });
      OrderDetail.belongsTo(models.Book, { foreignKey: 'bookId'});
    }
  }
  OrderDetail.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};