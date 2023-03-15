// import sequelize from db.config
const sequelize = require("../database/db.config");

// import DataTypes from sequelize
const { DataTypes } = require("sequelize");

// Creating a model for TeamComposition
exports.TeamComposition = sequelize.define("team_composition",{
    resource_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    project_role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    start_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    end_date:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:true
    },
    billing_status:{
        type:DataTypes.STRING,
        allowNull:true
    },
    customer_exposed_status:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    allocation_type:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    freezeTableName:true,
});
