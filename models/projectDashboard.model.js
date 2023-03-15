// import sequelize from db.config
const sequelize = require("../database/db.config");

// import DataTypes from sequelize
const { DataTypes } = require("sequelize");

// Creating a model for ProjectDashboard
exports.ProjectDashboard = sequelize.define("project_dashboard",{
    project_id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    project_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    client:{
        type:DataTypes.STRING,
        allowNull:false
    },
    client_account_manager:{
        type:DataTypes.STRING,
        allowNull:false
    },
    project_status:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    project_start_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    project_end_date:{
        type:DataTypes.DATE,
        allowNull:true
    },
    project_fitness_indicator:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    project_domain:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    project_type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    team_size:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    freezeTableName:true,
});
