module.exports = (sequelize, dataTypes) => {
    let alias = "purchase";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        status: {
            type: dataTypes.STRING
        },
        payment_method_id: {
            type: dataTypes.INTEGER
        },
     
          
    };
    
    let config = {
        tableName: "purchases",
        timestamps: false
    };

    const Purchase = sequelize.define( alias, cols, config );

    Purchase.associate = models => {
		// pertenece a:
		Purchase.belongsTo(models.users, {
			as: 'users',
            foreignKey: 'user_id'
			
		});

	
		Purchase.hasMany(models.shopping_carts, {
			as: 'shopping_carts',
            foreignKey: 'purchase_id'
			
		});
    

		Purchase.belongsTo(models.payments_methods, {
			as: 'payments_methods',
            foreignKey: 'payment_method_id'
			
		});
    }

    return Product;

}