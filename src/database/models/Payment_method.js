module.exports = (sequelize, dataTypes) => {
    let alias = "Payment_method";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name: {
            type: dataTypes.STRING,
        },

        
        
        };
    

    let config = {
        tableName: "payment_methods",
        timestamps: false,
        paranoid: true,
        deleteAt: "destroyTime"
    };

    const Payment_method = sequelize.define( alias, cols, config );

    Payment_method.associate = models => {
		
        // tiene muchos:
		Payment_method.belongsToMany(models.User, {
			as: 'users',
            through: 'users_payments',
            foreign_key: "payment_method_id",
            otherKey: "user_id",
            timestamps: false
			
		});

	
    };

    return Payment_method;

}