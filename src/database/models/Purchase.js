module.exports = (sequelize, dataTypes) => {
    let alias = "Purchase";

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
        timestamps: false,
        paranoid: true,
        deleteAt: "destroyTime"
    };

    const Purchase = sequelize.define( alias, cols, config );

    Purchase.associate = models => {
		// pertenece a:
		Purchase.belongsTo(models.User, {
			as: 'users',
            foreignKey: 'user_id'
			
		});

	
		Purchase.belongsToMany(models.Product, {
			as: 'products',
            through: 'shopping_carts',
            foreign_key: "purchase_id",
            otherKey: "product_id",
            timestamps: false
			
		});
    

		Purchase.belongsTo(models.Payment_method, {
			as: 'payments_methods',
            foreignKey: 'payment_method_id'
			
		});
    }

    return Purchase;

}