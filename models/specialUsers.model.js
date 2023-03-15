// import sequelize from db.config
const sequelize = require("../database/db.config");

// import DataTypes from sequelize
const { DataTypes } = require("sequelize");

// Creating a model for SpecialUsers
exports.SpecialUsers = sequelize.define("special_users",{
    specialUsers_id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email_id:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            checkEmailId(email_id){
                if(email_id.split("@")[1] != "wal.com"){
                    throw new Error({Message:"Only wal domain is allowed"})
                } 
            }
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    user_role:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    freezeTableName:true,
});
