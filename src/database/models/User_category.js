module.exports = (sequelize, dataTypes) => {
    let alias = "User_category";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        user_type: {
            type: dataTypes.STRING,
        },
        
        
        
        
    };
    
    let config = {
        tableName: "users_categories",
        timestamps: false,
        paranoid: true,
        deleteAt: "destroyTime"
    };

    const User_category = sequelize.define( alias, cols, config );

   User_category.associate = models => {
		
        // tiene muchos:
		User_category.hasMany(models.User, {
			as: 'users',
            foreignKey: 'category_id'
			
		});

	};


    return User_category;

}