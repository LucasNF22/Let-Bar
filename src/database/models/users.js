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
            type: dataTypes.varchar,
        },
        password: {
            type: dataTypes.varchar,
        },
        tel: {
            type: dataTypes.INTEGER,
        },
        avatar: {
            type: dataTypes.STRING,
        },
        birthday: {
            type: dataTypes.dataTypes,
        },
    };
    
    let config = {
        tableName: "users",
        timestamps: false
    };

    const Users = sequelize.define( alias, cols, config );

   Users.associate = models => {
		
        // tiene muchos:
		Users.belongsTo(models.products, {
			as: 'categories',
            foreignKey: 'category_id'
			
		});

	}


    return Users;

}