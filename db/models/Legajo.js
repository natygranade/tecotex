module.exports = (sequelize, type)=>{
    const Legajo = sequelize.define("Legajo",{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
legajo:{
    type: type.INTEGER,
    allowNull: false
},
nombre:{
    type: type.STRING,
    allowNull: false
}     
    },{
        underscored: true,
        tableName: 'stock_legajos',
        timestamps: false,
      
    })
    
    Legajo.associate = function(models){
        Legajo.hasMany(models.Vale,{
            as: "stock_vales",
            foreignKey: "usuario"
        })
      
    }
    
    return Legajo
}

