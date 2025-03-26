const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Email = sequelize.define('Email', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subject: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    recipient_email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'emails',
    timestamps: false
});

Email.belongsTo(User, { foreignKey: 'id_user' });

module.exports = Email;
