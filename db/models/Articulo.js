
module.exports = (sequelize, type)=>{
    const Articulo =    sequelize.define("Articulo",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        codigo: {
            type: type.INTEGER,
              allowNull: false
        },
        codgaci: {
            type: type.STRING,
              allowNull: false
        },
        descripcion: {
            type: type.STRING,
              allowNull: true
        }    
        
    },{
        underscored: true,
        tableName: 'stock_articulos',
        timestamps: false,
      
    })
    
    Articulo.associate = function(models){
              Articulo.hasMany( models.Vale,{
            as: "vale",
            foreignKey: "articulo_id",
        })
    }
    
    return Articulo
}
