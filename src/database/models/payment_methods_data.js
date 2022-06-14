module.exports = (sequelize, dataTypes) => {
    let alias = "payment_methods_data";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        card_number: {
            type: dataTypes.STRING,
        },
        card_bank: {
            type: dataTypes.STRING,
        },
        owner: {
            type: dataTypes.STRING,
        },
        cbu: {
            type: dataTypes.INTEGER,
        },
        mp_alias: {
            type: dataTypes.STRING,
        },
        mp_cvu: {
            type: dataTypes.INTEGER,
        },
        
        
    };
    
    let config = {
        tableName: "payment_methods_data",
        timestamps: false
    };

    const Payment_methods_data = sequelize.define( alias, cols, config );

    Payment_methods_data.associate = models => {
		
        // tiene muchos:
		Payment_methods_data.hasMany(models.products, {
			as: 'users',
            foreignKey: 'user_id'
			
		});

	};


    return Payment_methods_data;
}