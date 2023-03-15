// import sequelize from db.config
const sequelize = require("../database/db.config");

// import DataTypes from sequelize
const { DataTypes } = require("sequelize");


// Creating a model for Employees
exports.Employees = sequelize.define("employees",{
    emp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    freezeTableName:true,
});
