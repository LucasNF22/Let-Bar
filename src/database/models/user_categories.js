module.exports = (sequelize, dataTypes) => {
    let alias = "user_categories";

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
        tableName: "user_categories",
        timestamps: false
    };

    const user_category = sequelize.define( alias, cols, config );

   user_category.associate = models => {
		
        // tiene muchos:
		user_category.hasMany(models.users, {
			as: 'users',
            foreignKey: 'category_id'
			
		});

	};


    return user_category;

}