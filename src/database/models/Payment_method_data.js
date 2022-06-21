module.exports = (sequelize, dataTypes) => {
    let alias = "Payment_method_data";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        card_number: {
            type: dataTypes.INTEGER,
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
        payment_id: {
            type: dataTypes.INTEGER,
        },
        
        
    };
    
    let config = {
        tableName: "payment_methods_data",
        timestamps: false,
        paranoid: true,
        deleteAt: "destroyTime"
    };

    const Payment_method_data = sequelize.define( alias, cols, config );

    Payment_method_data.associate = models => {
		
        // tiene muchos:
		Payment_method_data.belongsTo (models.Payment_method, {
			as: 'users',
            foreignKey: 'user_id'
			
		});

	};


    return Payment_method_data;
}