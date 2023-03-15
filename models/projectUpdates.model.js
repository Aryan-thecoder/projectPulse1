// import sequelize from db.config
const sequelize = require("../database/db.config");

// import DataTypes from sequelize
const { DataTypes } = require("sequelize");

// Creating a model for ProjectUpdates
exports.ProjectUpdates = sequelize.define("project_updates",{
    date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    project_status_update:{
        type:DataTypes.STRING,
        allowNull:false
    },
    schedule_status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    resourcing_status:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    quality_status:{
        type:DataTypes.STRING,
        allowNull:true
    },
    waiting_for_client_inputs:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    freezeTableName:true,
});
