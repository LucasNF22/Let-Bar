module.exports = (sequelize, dataTypes) => {
    let alias = "products_categories";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        category: {
            type: dataTypes.STRING,
        },
        name: {
            type: dataTypes.STRING,
        },
        icon: {
            type: dataTypes.STRING,
        }
    };
    
    let config = {
        tableName: "products_categories",
        timestamps: false
    };

    const Product_category = sequelize.define( alias, cols, config );

    Product_category.associate = models => {
		
        // tiene muchos:
		Product_category.hasMany(models.products, {
			as: 'products',
            foreignKey: 'category_id'
			
		});

	}


    return Products_category;

}