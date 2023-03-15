// import sequelize from db.config
const sequelize = require("../database/db.config");

// import DataTypes from sequelize
const { DataTypes } = require("sequelize");

// Creating a model for ProjectConcerns
exports.ProjectConcerns = sequelize.define("project_concerns",{
    project_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    concern_description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    concern_raised_by:{
        type:DataTypes.STRING,
        allowNull:false
    },
    concern_raised_date:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    concern_severity:{
        type:DataTypes.STRING,
        allowNull:true
    },
    concern_from_client:{
        type:DataTypes.STRING,
        allowNull:true
    },
    concern_status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    concern_mitigated_date:{
        type:DataTypes.DATE,
        allowNull:false
    }
},{
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    freezeTableName:true,
});
