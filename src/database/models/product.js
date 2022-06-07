module.exports = (sequelize, dataTypes) => {
    let alias = "products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        brand: {
            type: dataTypes.STRING
        },
        size: {
            type: dataTypes.STRING
        },
        priceUnit: {
            type: dataTypes.DECIMAL
        },
        cantDisc: {
            type: dataTypes.INTEGER
        },
        priceCant: {
            type: dataTypes.DECIMAL
        },
        offer: {
            type: dataTypes.BOOLEAN
        },
        year: {
            type: dataTypes.INTEGER
        },
        stock: {
            type: dataTypes.INTEGER
        },
        graduation: {
            type: dataTypes.DECIMAL
        },
        cantValoration: {
            type: dataTypes.DECIMAL
        },
        acuValoration: {
            type: dataTypes.INTEGER
        },
        Valoration: {
            type: dataTypes.DECIMAL
        }
          
    };
    
    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define( alias, cols, config );

    Product.associate = models => {
		// pertenece a:
		Product.belongsTo(models.products_categories, {
			as: 'category',
            foreignKey: 'category_id'
			
		});

	}



    return Product;

}