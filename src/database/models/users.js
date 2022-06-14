module.exports = (sequelize, dataTypes) => {
    let alias = "users";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        first_name: {
            type: dataTypes.STRING,
        },
        last_name: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        tel: {
            type: dataTypes.INTEGER,
        },
        avatar: {
            type: dataTypes.STRING,
        },
        birthday: {
            type: dataTypes.STRING,
        },
        category_id: {
            type: dataTypes.INTEGER
        }
    };
    
    let config = {
        tableName: "users",
        timestamps: false
    };

    const User = sequelize.define( alias, cols, config );

   User.associate = models => {
		
        // tiene muchos:
		User.belongsTo(models.products_categories, {
			as: 'categories',
            foreignKey: 'category_id'
			
		});

        User.hasMany(models.addresses, {
            as: "adsresses",
            foreignKey: "user_id"
        })

	}


    return User;

}