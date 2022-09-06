// Model for vocabulary table
module.exports = function(sequelize, DataTypes){
    var Dictionary = sequelize.define("Dictionary",{
        WORD: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: true
        },
        MEANING: DataTypes.STRING
    })

    return Dictionary;
}