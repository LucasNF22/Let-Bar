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
            type: dataTypes.varchar,
        },
        street_number: {
            type: dataTypes.varchar,
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

    const Users = sequelize.define( alias, cols, config );

   addresses.associate = models => {
		
        // tiene muchos:
		Users.hasMany(models.products, {
			as: 'users',
            foreignKey: 'user_id'
			
		});

	};


    return addresses;

}