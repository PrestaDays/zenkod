const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Conversation = require('./Conversation');

const ConversationUser = sequelize.define('ConversationUser', {
    conversation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: 'conversation_user',
    timestamps: false
});

Conversation.belongsToMany(User, { through: ConversationUser, foreignKey: 'conversation_id' });
User.belongsToMany(Conversation, { through: ConversationUser, foreignKey: 'user_id' });

module.exports = ConversationUser;
