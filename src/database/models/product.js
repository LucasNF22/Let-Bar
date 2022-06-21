module.exports = (sequelize, dataTypes) => {
    let alias = "Product";

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
        image: {
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
        valoration: {
            type: dataTypes.DECIMAL
        }

    };

    let config = {
        tableName: "products",
        timestamps: false,
        paranoid: true,
        deleteAt: "destroyTime"
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        // pertenece a:
        Product.belongsTo(models.Product_category, {
            as: 'categories',
            foreignKey: 'category_id'

        });

    Product.belongsToMany(models.Purchase, {
            as: 'purchases',
            through: 'shopping_carts',
            foreign_key: "product_id",
            otherKey: "purchase_id",
            timestamps: false

        });
    }

 

    return Product;

}