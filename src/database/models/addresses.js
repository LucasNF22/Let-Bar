module.exports = (sequelize, dataTypes) => {
    let alias = "addresses";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        province: {
            type: dataTypes.STRING,
        },
        locality: {
            type: dataTypes.STRING,
        },
        street: {
            type: dataTypes.STRING,
        },
        street_number: {
            type: dataTypes.STRING,
        },
        comments: {
            type: dataTypes.INTEGER,
        },
        alias: {
            type: dataTypes.STRING,
        },
        
        
    };
    
    let config = {
        tableName: "addresses",
        timestamps: false
    };

    const Address = sequelize.define( alias, cols, config );

   Address.associate = models => {
		
        // tiene muchos:
		Address.belongTo (models.users, {
			as: 'user',
            foreignKey: 'user_id'
			
		});

	};


    return Address;

}