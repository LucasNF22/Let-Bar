module.exports = (sequelize, dataTypes) => {
    let alias = "shopping_carts";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        product_id: {
            type: dataTypes.INTEGER,
        },
        status: {
            type: dataTypes.STRING,
        },
        payment_method_id: {
            type: dataTypes.INTEGER,
        }
 
          
    };
    
    let config = {
        tableName: "shopping_carts",
        timestamps: false
    };

    const Shopping_cart = sequelize.define( alias, cols, config );


    return Shopping_cart;

}