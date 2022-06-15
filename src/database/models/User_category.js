module.exports = (sequelize, dataTypes) => {
    let alias = "User_category";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        provinuser_type: {
            type: dataTypes.STRING,
        },
        
        
        
        
    };
    
    let config = {
        tableName: "users_categories",
        timestamps: false
    };

    const user_category = sequelize.define( alias, cols, config );

   user_category.associate = models => {
		
        // tiene muchos:
		user_category.hasMany(models.User, {
			as: 'users',
            foreignKey: 'category_id'
			
		});

	};


    return user_category;

}