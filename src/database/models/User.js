module.exports = (sequelize, dataTypes) => {
    let alias = "user";

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
            type: dataTypes.DATE,
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
		
		User.belongsTo(models.User_category, {
			as: 'categories',
            foreignKey: 'category_id'
			
		});

        User.hasMany(models.Address, {
            as: "addresses",
            foreignKey: "user_id"
        });

        User.belongsToMany(models.Payment_method, {
			as: 'payments_methods',
            through: 'users_payments',
            foreign_key: "user_id",
            otherKey: "payment_method_id",
            timestamps: false
			
		});

	}


    return User;

}