
module.exports = (sequelize, type)=>{
    const Vale =    sequelize.define("Vale",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        vale:{
            type: type.INTEGER,
        },
        usuario:{
            type: type.INTEGER,
        },
        fecha: {
            type: type.DATE,
            defaultValue: 'CURRENT_TIMESTAMP',
            allowNull: false
        },
        hora: {
            type: type.STRING,
            allowNull: true
        },
        cantidad:{
            type: type.INTEGER,
        },
        articulo_id: type.INTEGER
        
    },{
        underscored: true,
        tableName: 'stock_vales',
        timestamps: false,
        
    })                                                                                                                                                                                          
    
    Vale.associate = function(models){
        Vale.belongsTo(models.Codigo,{
            as: "stock_codigos",
            foreignKey: "vale"
        }),
        Vale.belongsTo(models.Legajo,{
            as: "stock_legajos",
            foreignKey: "usuario"
        }),
        Vale.belongsTo( models.Articulo,{
            as: "articulos",
            foreignKey: "articulo_id",
        })
    }
    
    return Vale
}

