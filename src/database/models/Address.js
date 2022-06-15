module.exports = (sequelize, dataTypes) => {
    let alias = "Address";

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
        user_id: {
            type: dataTypes.STRING,
        },
        
        
    };
    
    let config = {
        tableName: "addresses",
        timestamps: false
    };

    const Address = sequelize.define( alias, cols, config );

   Address.associate = models => {
		
        
		Address.belongsTo(models.User, {
			as: 'users',
            foreignKey: 'user_id'
			
		});

	};


    return Address;

}