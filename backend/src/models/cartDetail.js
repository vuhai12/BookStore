'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CartDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            CartDetail.belongsTo(models.Cart, { foreignKey: 'cartId' });
            CartDetail.belongsTo(models.Book, { foreignKey: 'bookCartId'});
        }
    }
    CartDetail.init({
        quantity: DataTypes.INTEGER,
        isChecked:DataTypes.BOOLEAN,
      
        
    }, {
        sequelize,
        modelName: 'CartDetail',
    });
    return CartDetail;
};