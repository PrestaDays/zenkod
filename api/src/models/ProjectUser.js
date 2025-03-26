const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Project = require('./Project');

const ProjectUser = sequelize.define('ProjectUser', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: 'project_user',
    timestamps: false
});

Project.belongsToMany(User, { through: ProjectUser, foreignKey: 'project_id' });
User.belongsToMany(Project, { through: ProjectUser, foreignKey: 'user_id' });

module.exports = ProjectUser;
