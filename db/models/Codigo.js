module.exports = (sequelize, type)=>{
    const Codigo = sequelize.define("Codigo",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
codvale:{
    type: type.INTEGER,
         allowNull: true

}     
    },{
        underscored: true,
        tableName: 'stock_codigos',
        timestamps: false,
      
    })
    
    Codigo.associate = function(models){
        Codigo.hasMany(models.Vale,{
            as: "stock_vales",
            foreignKey: "vale"
        })
      
    }
    
    return Codigo
}

